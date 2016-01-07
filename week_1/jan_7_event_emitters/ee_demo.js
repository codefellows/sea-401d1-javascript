const EE = require('events').EventEmitter;
const fs = require('fs');

var ee = new EE();

ee.on('three:done', () => {
  console.log('finished!');
});

ee.on('two:done', () => {
  fs.readFile('three.txt', (err, data) => {
    if (err) return console.log(err);

    console.log(data.toString());
    ee.emit('three:done');
  });
});

ee.on('one:done', () => {
  console.log('one:done');
  fs.readFile('two.txt', (err, data) => {
    if (err) return console.log(err);

    console.log(data.toString());
    ee.emit('two:done');
  });
});

fs.readFile('one.txt', (err, data) => {
  if (err) return console.log(err);

  console.log(data.toString());
  process.nextTick(() => console.log('next tick'));
  ee.emit('one:done');
});
