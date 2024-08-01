#!/bin/bash

PROJECT_DIR="/home/ArtDigital"
GIT_BRANCH="main"

echo "Starting deployment at $(date)"

cd $PROJECT_DIR || { echo "Failed to change directory to $PROJECT_DIR"; exit 1; }

git fetch origin && git reset --hard origin/$GIT_BRANCH
if [ $? -ne 0 ]; then
    echo "Git update failed"
    exit 1
fi

npm install || { echo "NPM install failed"; exit 1; }

npm run build || { echo "NPM build failed"; exit 1; }

pm2 reload ArtDigital || { echo "PM2 reload failed"; exit 1; }

echo "Deployment completed at $(date)"
