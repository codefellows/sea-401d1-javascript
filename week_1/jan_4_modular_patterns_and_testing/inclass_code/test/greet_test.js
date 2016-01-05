var greet = require(__dirname + '/../greet');
var greet2 = require(__dirname + '/../greet2');
var expect = require('chai').expect;

describe('the greet function', function() {
  it('should greet a name', function() {
    expect(greet('test')).to.eql('hello test');
  });

  it('solve the all world\'s problems');

  it('fails on an error', function() {
    throw new Error('some test error');
  });
});

describe('greet 2 electric boogaloo', function() {
  it('should have a greet property that greets someone', function() {
    expect(greet2.greet('test')).to.eql('hello a second time test');
  });
});
