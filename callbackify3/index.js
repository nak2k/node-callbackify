exports.callbackify = fn =>
  fn.length === 3 ? fn : (arg1, arg2, callback) =>
    fn(arg1, arg2).then(result => callback(null, result), callback);
