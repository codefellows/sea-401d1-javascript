var goToProm = (input) => {
  return new Promise((resolve, reject) => {
    if (input.limo === true)
      return resolve('awesome');
    return reject('not as awesome');
  });
};

var successfulProm = goToProm({limo: true});
successfulProm.then((result) => {
  console.log('You had an ' + result + ' prom');
});
successfulProm.then(() => {
  console.log('You drank too much and puked');
});

var anotherProm = goToProm({lime: true});
anotherProm.then(() => {
  console.log('this shouldn\'t happne');
});
anotherProm.catch((err) => {
  console.log(err);
});

console.log('first');
