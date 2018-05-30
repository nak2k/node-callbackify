exports.callbackify = fn =>
  fn.length === 4 ? fn : (arg1, arg2, arg3, callback) =>
    fn(arg1, arg2, arg3).then(result => callback(null, result), callback);
