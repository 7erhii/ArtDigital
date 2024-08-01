#!/bin/bash

LOG_FILE="/home/ArtDigital/deploy.log"
PROJECT_DIR="/home/ArtDigital"

echo "Starting deployment at $(date)" >> $LOG_FILE

# Переход в директорию проекта
cd $PROJECT_DIR || { echo "Failed to change directory to $PROJECT_DIR" >> $LOG_FILE; exit 1; }

# Обновление из репозитория
git pull --ff-only >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "Git pull failed" >> $LOG_FILE
    exit 1
fi

# Установка зависимостей
npm install >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "NPM install failed" >> $LOG_FILE
    exit 1
fi

# Сборка проекта
npm run build >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "NPM build failed" >> $LOG_FILE
    exit 1
fi

# Перезапуск через PM2
pm2 restart ArtDigital >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    echo "PM2 restart failed" >> $LOG_FILE
    exit 1
fi

echo "Deployment completed at $(date)" >> $LOG_FILE
