## Description
Control a raspberry pi robot car over wifi, with video streaming

## Instructions
- ssh into the raspberry pi
- clone into this repo
- run stream-server.sh
- on your computer, use VLC open network stream: rtsp://<raspberry_pi_ip>:8554
- get the raspberry pi IP with `hostname -I`
- live video should now be streaming
- back in the raspberry pi ssh shell, run `node controls.js`
- this will allow you to control the car

## Old Instructions
- if you have an old raspberry pi OS
- run stream-server-old.sh
- on your computer, use VLC open network stream: http://<pi_ip>:8080

## Initial setup
- on the raspberry pi
- `sudo apt update && sudo apt upgrade -y`
- `sudo apt install rpicam-apps`
- install nvm and node
- run npm install
