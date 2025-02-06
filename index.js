const { execFile } = require('child_process');
const path = require('path');

module.exports = async function (context, req) {
    const goBinary = path.join(__dirname, 'myGoApp');
    const args = [];

    // Forward the request path and query parameters to the Go binary
    if (req.query) {
        for (const key in req.query) {
            args.push(`--${key}=${req.query[key]}`);
        }
    }

    execFile(goBinary, args, (error, stdout, stderr) => {
        if (error) {
            context.log.error(`Error: ${stderr}`);
            context.res = {
                status: 500,
                body: stderr
            };
            return;
        }
        context.res = {
            status: 200,
            body: stdout
        };
    });
};
