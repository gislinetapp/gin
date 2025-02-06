#!/bin/bash

az functionapp deployment source config  --resource-group $RG --name gisli-app --repo-url https://github.com/gislinetapp/gin --branch master --manual-integration
