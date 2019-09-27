const keypress = require('keypress');
keypress(process.stdin);

const { Gpio } = require('onoff');
const leftTrackForward = new Gpio(27, 'out');
const leftTrackBackward = new Gpio(22, 'out');
const rightTrackForward = new Gpio(4, 'out');
const rightTrackBackward = new Gpio(17, 'out');


process.stdin.on('keypress', (ch, key) => {
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
    return;
  }
  
  if (key) {
    switch(key.name) {
      case 'up':
        moveForward();
        break;
      case 'left':
        turnLeft();
        break;
      case 'right':
        turnRight();
        break;
      case 'down':
        moveBackward();
        break;
      case 'space':
        stop();
        break;
    }
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

const moveForward = () => {
  console.log('forward');

  leftTrackBackward.write(Gpio.LOW);
  rightTrackBackward.write(Gpio.LOW);

  leftTrackForward.write(Gpio.HIGH);
  rightTrackForward.write(Gpio.HIGH);
}

const turnRight = () => {
  console.log('right');

  leftTrackBackward.write(Gpio.LOW);
  rightTrackForward.write(Gpio.LOW);
  
  leftTrackForward.write(Gpio.HIGH);
  rightTrackBackward.write(Gpio.HIGH);
}

const turnLeft = () => {
  console.log('left');

  leftTrackForward.write(Gpio.LOW);
  rightTrackBackward.write(Gpio.LOW);

  leftTrackBackward.write(Gpio.HIGH);
  rightTrackForward.write(Gpio.HIGH);
}

const moveBackward = () => {
  console.log('backward');

  leftTrackForward.write(Gpio.LOW);
  rightTrackForward.write(Gpio.LOW);

  leftTrackBackward.write(Gpio.HIGH);
  rightTrackBackward.write(Gpio.HIGH);
}

const stop = () => {
  console.log('stop');
  
  leftTrackBackward.write(Gpio.LOW);
  rightTrackBackward.write(Gpio.LOW);
  leftTrackForward.write(Gpio.LOW);
  rightTrackForward.write(Gpio.LOW);
}