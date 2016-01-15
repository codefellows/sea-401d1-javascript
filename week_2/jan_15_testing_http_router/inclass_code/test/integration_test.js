const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require(__dirname + '/test_server');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
var origin = 'localhost:3000';
var uri = '/test';

describe('rest functionality of test server', () => {
  after(() => server.close());

  it('should respond to a get request', (done) => {
    request(origin)
      .get(uri)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('test from get');
        done();
      });
  });

  it('should respond to a post request', (done) => {
    request(origin)
      .post(uri)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('test from post');
        done();
      });
  });

  it('should respond to a put request', (done) => {
    request(origin)
      .put(uri)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('test from put');
        done();
      });
  });

  it('should respond to a patch request', (done) => {
    request(origin)
      .patch(uri)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('test from patch');
        done();
      });
  });

  it('should respond to a delete request', (done) => {
    request(origin)
      .delete(uri)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('test from delete');
        done();
      });
  });

});
