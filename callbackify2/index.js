exports.callbackify = fn =>
  fn.length === 2 ? fn : (arg1, callback) =>
    fn(arg1).then(result => callback(null, result), callback);
