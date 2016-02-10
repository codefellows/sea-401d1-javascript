for(var i = 0; i < 10; i++) {
  (function(num) {
    setTimeout(() => console.log(num), Math.random() * 100);
  })(i);
};
