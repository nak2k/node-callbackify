const test = require('tape');
const { callbackify } = require('..');

test('test callbackify for a normal function', t => {
  t.plan(1);

  const callback = (arg1, callback) => callback(null, true);

  t.equal(callbackify(callback), callback);
});

test('test callbackify for an async function', t => {
  t.plan(4);

  const asyncFn = async (arg1) => true;

  const callback = callbackify(asyncFn);

  t.notEqual(callback, asyncFn);

  t.equal(callback.length, 2);

  callback(1, (err, result) => {
    t.error(err);
    t.ok(result);
  });
});
