var recurseLoop = function(count, max, cb) {
  if (count >= max) return;
  cb(count);
  process.nextTick(() => recurseLoop(++count, max, cb));
};

recurseLoop(0, 15, function(num) {
  console.log('loop one: ' + num);
});

recurseLoop(0, 10, function(num) {
  console.log('loop two: ' + num);
});
