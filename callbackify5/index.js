exports.callbackify = fn =>
  fn.length === 5 ? fn : (arg1, arg2, arg3, arg4, callback) =>
    fn(arg1, arg2, arg3, arg4).then(result => callback(null, result), callback);
