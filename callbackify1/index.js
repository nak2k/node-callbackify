exports.callbackify = fn =>
  fn.length === 1 ? fn : (callback) =>
    fn().then(result => callback(null, result), callback);
