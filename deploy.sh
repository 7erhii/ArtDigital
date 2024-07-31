#!/bin/bash

PROJECT_DIR="/home/ArtDigital"
LOG_FILE="/home/ArtDigital/deploy.log"

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> $LOG_FILE
}

cd $PROJECT_DIR || { log "Ошибка: Не удалось перейти в директорию проекта"; exit 1; }

log "Начало развертывания"

log "Добавление изменений в git"
git add . >> $LOG_FILE 2>&1

log "Создание коммита в git"
git commit -m "Auto commit before pull" >> $LOG_FILE 2>&1

log "Обновление из удаленного репозитория"
git pull origin main >> $LOG_FILE 2>&1

log "Установка  npm"
npm i >> $LOG_FILE 2>&1

log "Сборка "
npm run build >> $LOG_FILE 2>&1

log "Перезапуск  PM2"
pm2 restart ArtDigital >> $LOG_FILE 2>&1

log "завершено"
