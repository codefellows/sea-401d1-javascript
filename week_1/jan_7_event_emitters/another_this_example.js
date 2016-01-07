const SuperArray = function(input) {
  var data = input || [];
  this.push = Array.prototype.push.bind(data);
  this.pop = Array.prototype.pop.bind(data);
  this.peek = function() {
    return data[data.length - 1];
  };
};

debugger;
