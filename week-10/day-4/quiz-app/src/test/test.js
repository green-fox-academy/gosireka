'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../app');

test('get all questions', (t) => {
  request(app)
  .get('/api/questions')
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body.length, 11);
    t.end();
  });
});


test('delete question with wrong id', (t) => {
  request(app)
  .delete('/api/questions/1000')
  .expect(404)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {message: 'Wrong id!'});
    t.end();
  });
});

test('delete question with good id', (t) => {
  request(app)
  .delete('/api/questions/42')
  .expect(200)
  .end((err, res) => {
    if(err) throw err;
    t.same(res.body, {message: 'Successfully deleted!'});
    t.end();
  });
});

