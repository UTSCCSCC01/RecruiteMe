#!/bin/bash

cd ./frontend && npm start &
cd ./backend && nodemon index.js