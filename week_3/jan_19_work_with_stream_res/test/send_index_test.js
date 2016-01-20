const expect = require('chai').expect;
const sendIndex = require(__dirname + '/../lib/send_index');
const util = require('util');
const Stream = require('stream');
const fs = require('fs');

var Res = function() {

};

util.inherits(Res, Stream);

describe('send index', ()=> {
  it('should send the index file', (done) => {
    Res.prototype.writeHead = function(statusCode, headers) {
      expect(statusCode).to.eql(200);
      expect(headers['Content-Type']).to.eql('text/html');
    };

    var resText = '';

    Res.prototype.write = function(data) {
      resText += data.toString();
    };

    Res.prototype.end = function() {
      expect(resText).to.eql(testFile);
      done();
    }; 

    var res = new Res();
    sendIndex(__dirname + '/test.html', res);
    var testFile = fs.readFileSync(__dirname + '/test.html', 'utf-8');
  });
});
