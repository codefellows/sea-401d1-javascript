const net = require('net');

const client = net.connect(3000, () => {
  console.log('connected');
  client.write('GET / HTTP/1.1 Host: localhost:3000 User-Agent: curl/7.46.0 Accept: */*\r\n');
});

client.on('data', (data) => {
  console.log('data');
  console.log(data);
});

client.on('end', () => {
  console.log('done');
});
