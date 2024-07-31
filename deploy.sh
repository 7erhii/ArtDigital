#!/bin/bash
PROJECT_DIR="/home/ArtDigital"
LOG_FILE="/home/ArtDigital/deploy.log"

cd $PROJECT_DIR || exit

git pull origin main >> $LOG_FILE 2>&1

npm i >> $LOG_FILE 2>&1

npm run build >> $LOG_FILE 2>&1

pm2 restart ArtDigital >> $LOG_FILE 2>&1
