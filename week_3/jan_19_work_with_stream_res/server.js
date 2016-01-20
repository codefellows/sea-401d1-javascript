const http = require('http');
const sendIndex = require(__dirname + '/lib/send_index');

const server = http.createServer((req, res) => sendIndex(null, res)).listen(3000, () => console.log('server up'));
