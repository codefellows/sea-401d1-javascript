const fs = require('fs');
const expect = require('chai').expect;

describe('some async testing', () => {
  it('should test a read file', (done) => {
    fs.readFile(__dirname + '/test.txt', (err, data) => {
      expect(true).to.eql(false);
      done();
    });
  });

  it('should test another read file', (done) => {
    fs.readFile(__dirname + '/test.txt', (err, data) => {
      expect(true).to.eql(true);
      done();
    });
  });
});
