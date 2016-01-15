const fs = require('fs');
var readFile = (filename, callback) => {
  var cb = callback || function() {};
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
        return cb(err);
      }

      resolve(data);
      return cb(null, data);
    });
  });
};

readFile('one.txt')
  .then((data) => {
    console.log(data.toString());
    readFile('two.txt')
      .then((data) => {
        console.log(data.toString());
      });
    return data.toString();
  })
  .then((data) => {
    console.log(data.toUpperCase());
    return 'here is another completely different string';
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    throw err;
  });

readFile('one.txt', (err, data) => {
  if (err) throw err;

  console.log('from callback: ' + data.toString());
})
  .then((data) => {
    console.log('from promise: '  + data.toString());
  });

