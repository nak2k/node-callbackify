const test = require('tape');
const { callbackify } = require('..');

test('test callbackify for a normal function', t => {
  t.plan(1);

  const callback = (arg1, arg2, callback) => callback(null, true);

  t.equal(callbackify(callback), callback);
});

test('test callbackify for an async function', t => {
  t.plan(4);

  const asyncFn = async (arg1, arg2) => true;

  const callback = callbackify(asyncFn);

  t.notEqual(callback, asyncFn);

  t.equal(callback.length, 3);

  callback(1, 2, (err, result) => {
    t.error(err);
    t.ok(result);
  });
});
