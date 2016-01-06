Array.prototype.map.call(process.argv, function(arg, index) {
  console.log(index + ': ' + arg);
});
