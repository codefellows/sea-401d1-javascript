const net = require('net');
const fs = require('fs');
const path = require('path');
const server = require(__dirname + '/../server');
const expect = require('chai').expect;

describe('logging server', () => {
  after(() => {
    server.close();
  });

  it('should return the current time', (done) => {
    var client  = net.connect({port: 3000}, () => {
      client.write('hello test\n');
      client.end();
    });
    client.on('data', (data) => {
      fs.readFile(__dirname +  '/../log/' + data.toString(), (err, file) => {
        expect(file.toString()).to.eql('hello test\n');
        done();
      });
    });
  });
});
