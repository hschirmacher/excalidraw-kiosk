@echo off
rem build and start server, may take a while
rem wait 5 sec
rem timeout /T 5 
rem cd %HOMEPATH%
rem cd excalidraw-kiosk
start yarn start
start /d "C:\Program Files (x86)\Google\Chrome\Application" chrome.exe -kiosk http://localhost:3000 -overscroll-history-navigation=0
exit