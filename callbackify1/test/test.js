const test = require('tape');
const { callbackify } = require('..');

test('test callbackify for a normal function', t => {
  t.plan(1);

  const callback = (callback) => callback(null, true);

  t.equal(callbackify(callback), callback);
});

test('test callbackify for an async function', t => {
  t.plan(4);

  const asyncFn = async () => true;

  const callback = callbackify(asyncFn);

  t.notEqual(callback, asyncFn);

  t.equal(callback.length, 1);

  callback((err, result) => {
    t.error(err);
    t.ok(result);
  });
});
