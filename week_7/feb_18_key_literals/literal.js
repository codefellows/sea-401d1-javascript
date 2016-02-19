var data = {};
var badGet = function(key) {
  return data.key;
};

var badSet = function(key, value) {
  data.key = value;
  return value;
};

var get = function(key) {
  return data[key];
};

var set = function(key, value) {
  data[key] = value;
  return value;
};


badSet('awesome', 'superawesome');
badSet('cowabunga', 'radical');

console.log(badGet('awesome'));


set('aweosme', 'superawesome');
set('[something with brakets]', 'wtf does this do?');

console.log(get('aweosme'));
console.log(get('[something with brakets]'));
