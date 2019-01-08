'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('yondu endpoint without parameter', (t) => {
  request(app)
  .get('/yondu')
  .expect('Content-type', /json/)
  .expect(210)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {error : 'no query'});
    t.end();
  });
});

test('yondu endpoint with one parameter', (t) => {
  request(app)
  .get('/yondu/?distance=100')
  .expect('Content-type', /json/)
  .expect(210)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {error : 'no query'});
    t.end();
  });
});

test('yondu endpoint with 2 good parameters', (t) => {
  request(app)
  .get('/yondu/?distance=100&time=10')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {distance : '100', time : '10', speed : 10});
    t.end();
  });
});

test('yondu endpoint with time = 0 parameter', (t) => {
  request(app)
  .get('/yondu/?distance=100&time=0')
  .expect('Content-type', /json/)
  .expect(210)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {error: 'wrong time query'});
    t.end();
  });
});
