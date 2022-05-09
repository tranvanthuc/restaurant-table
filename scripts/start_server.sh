#!/bin/bash
cd /app

pm2 start "serve -s build" --name ReactApp
pm2 startup
pm2 save
pm2 restart all