#!/bin/bash

PROJECT_DIR="/home/ArtDigital"

cd $PROJECT_DIR || exit

git pull origin main

npm i

npm run build

pm2 restart ArtDigital
