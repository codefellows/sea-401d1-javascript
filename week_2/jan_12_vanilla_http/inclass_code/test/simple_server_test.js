const chai = require('chai');
const server = require(__dirname +'/../server');
const chaiHttp = require('chai-http');
const fs = require('fs');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('simple http server', () => {
  after(() => {
    server.close();
  });

  it('should have a hello route', (done) => {
    request('localhost:3000')
      .get('/hello')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body.msg).to.eql('hello world');
        done();
      });
  });

  it('should 404 on a page that does not exist', (done) => {
    request('localhost:3000')
      .get('/doesnotexist')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(404);
        expect(res.body.msg).to.eql('page not found');
        done();
      });
  });

  describe('with an index', () => {
    before((done) => {
      fs.readFile(__dirname + '/../public/index.html', (err, data) => {
        this.index = data.toString();
        done();
      });
    });

    it('should get an index', (done) => {
      request('localhost:3000')
        .get('/')
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.text).to.eql(this.index);
          done();
        });
    });
  });
});
