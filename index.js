const { execFile } = require('child_process');
const path = require('path');

module.exports = async function (context, req) {
    const goBinary = path.join(__dirname, 'gin');
    execFile(goBinary, (error, stdout, stderr) => {
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
