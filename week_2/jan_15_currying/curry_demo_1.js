var addTo = function (numToAdd) {
  return function(num) {
    return num += numToAdd;
  };
};

var addFive = addTo(5);
console.log(addFive(5));

var addThree = addTo(3);
console.log(addThree(5));

console.log(addThree(addFive(5)));
console.log(addTo(addThree(addFive(addThree(5))))(5));
console.log('blackjack!');
