var Construct = function() {
  this.awesome = 'super awesome';
  this.howAwesome = function(callback) {
    callback.call(this);
  };
};

var con = new Construct();
con.howAwesome(function() {
  console.log(this.awesome);
});

debugger;
