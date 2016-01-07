const EE = require('events').EventEmitter;
const fs = require('fs');
var ee = new EE();

ee.on('next', (file, callback) => {
  fs.readFile(file, (err, data) => {
    if (err) return ee.emit('log', err);

    ee.emit('log', data);
    callback(data); 
  });
});

ee.on('log', (data) => {
  console.log(data.toString());
});

ee.emit('next', 'one.txt', () => {
  ee.emit('next', 'two.txt', () => {
    ee.emit('next', 'three.txt', () => {
      ee.emit('log', 'finished');
    })
  }); 
});

var callbackBuilder = (files) => {
  return (files.length) ?  
  () => ee.emit('next', files.pop(), callbackBuilder(files)):
  () => console.log('second finished'); 
};
var files = ['one.txt', 'two.txt', 'three.txt'];
callbackBuilder(files)();
