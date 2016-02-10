for(var i = 0; i < 10; i++) {
  (function(num) {
    process.nextTick(() => console.log(num));
  })(i);
}
