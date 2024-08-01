#!/bin/bash

LOG_FILE="/home/ArtDigital/deploy.log"
PROJECT_DIR="/home/ArtDigital"
GIT_BRANCH="main" 

echo "Starting deployment at $(date)" >> $LOG_FILE

cd $PROJECT_DIR || { echo "Failed to change directory to $PROJECT_DIR" >> $LOG_FILE; exit 1; }

git fetch origin >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "Git fetch failed" >> $LOG_FILE
    exit 1
fi

git reset --hard origin/$GIT_BRANCH >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "Git reset failed" >> $LOG_FILE
    exit 1
fi

npm install >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "NPM install failed" >> $LOG_FILE
    exit 1
fi

npm run build >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "NPM build failed" >> $LOG_FILE
    exit 1
fi

pm2 restart ArtDigital >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "PM2 restart failed" >> $LOG_FILE
    exit 1
fi

echo "Deployment completed at $(date)" >> $LOG_FILE

