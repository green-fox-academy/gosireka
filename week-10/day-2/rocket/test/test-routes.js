'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('rocket endpoint shipstatus', (t) => {
  request(app)
  .get('/rocket')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body.shipstatus, 'empty');
    t.end();
  });
});

test('rocket/fill endpoint shipstatus with 5000 and ready status', (t) => {
  request(app)
  .get('/rocket/fill/?caliber=.50&amount=5000')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body.shipstatus, '40%');
    t.same(res.body.ready, false);
    t.end();
  });
});

test('rocket/fill endpoint shipstatus with plus 5000', (t) => {
  request(app)
  .get('/rocket/fill/?caliber=.50&amount=5000')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body.shipstatus, '80%');
    t.end();
  });
});

test('rocket/fill endpoint shipstatus with plus 5000 again (over max)', (t) => {
  request(app)
  .get('/rocket/fill/?caliber=.50&amount=5000')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body.shipstatus, 'full');
    t.end();
  });
});

test('ready status when full', (t) => {
  request(app)
  .get('/rocket/fill/?caliber=.50&amount=5000')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body.ready, true);
    t.end();
  });
});

test('rocket/fill endpoint without query', (t) => {
  request(app)
  .get('/rocket/fill/?caliber=.50')
  .expect('Content-type', /json/)
  .expect(210)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {error: 'no query'});
    t.end();
  });
});
