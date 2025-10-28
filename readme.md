## Description
Control a raspberry pi robot car over wifi, with video streaming

## Initial setup
- on the raspberry pi
- `sudo apt update && sudo apt upgrade -y`
- install nvm and node
- run npm install

## Instructions
- ssh into the raspberry pi with `ssh pi@raspberrypi.local`
- if necessary, password can be changed with `sudo passwd pi`
- clone into this repo
- run stream-server.sh
- this starts a multicast UDP stream
- on your computer, clone repo
- run connect-to-stream.sh
- live video should now be streaming
- back in the raspberry pi ssh shell, run `node controls.js`
- this will allow you to control the car

## Future changes
- need to update raspberry pi OS and debian
- after, use more modern rpicam-vid module


