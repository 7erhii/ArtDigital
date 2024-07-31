#!/bin/bash

# Путь к проекту
PROJECT_DIR="/home/ArtDigital"

# Переход в директорию проекта
cd $PROJECT_DIR

# Обновление репозитория
git pull origin main

# Установка зависимостей
npm install

# Сборка проекта
npm run build

# Перезапуск приложения с использованием PM2
pm2 restart ArtDigital
