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
        console.log('up');
        moveForward();
        break;
      case 'left':
          console.log('left');
        turnLeft();
        break;
      case 'right':
          console.log('right');
        turnRight();
        break;
      case 'down':
          console.log('down');
        moveBackward();
        break;
    }
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

const moveForward = () => {
  leftTrackForward.write(Gpio.HIGH);
  rightTrackForward.write(Gpio.HIGH);
}

const turnRight = () => {
  leftTrackForward.write(Gpio.HIGH);
  rightTrackBackward.write(Gpio.HIGH);
}

const turnLeft = () => {
  leftTrackBackward.write(Gpio.HIGH);
  rightTrackForward.write(Gpio.HIGH);
}

const moveBackward = () => {
  leftTrackBackward.write(Gpio.HIGH);
  rightTrackBackward.write(Gpio.HIGH);
}