'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint with parameter', (t) => {
  request(app)
  .get('/groot/?message=valamike')
  .expect('Content-type', /json/)
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {received : 'valamike', translated : 'I am Groot!'});
    t.end();
  });
});

test('groot endpoint without parameter', (t) => {
  request(app)
  .get('/groot')
  .expect('Content-type', /json/)
  .expect(210)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {error : 'I am Groot!'});
    t.end();
  });
});
