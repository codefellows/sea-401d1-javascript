const fs = require('fs');
var bitmap = fs.readFileSync(process.argv[2]);

console.log(`type: ${bitmap.toString('utf8', 0, 2)}`);
console.log(`size: ${bitmap.readUInt32LE(2)}`);
console.log(`start of pixel data: ${bitmap.readUInt32LE(10)}`);
console.log(`width: ${bitmap.readUInt32LE(18)} by height: ${bitmap.readUInt32LE(22)}`);
console.log(`number of colors: ${bitmap.readUInt32LE(46)}`);
