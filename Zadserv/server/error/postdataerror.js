module.exports = class PostDataTakenError extends require('./AppError') {
    constructor (message) {
      // Providing default message and overriding status code.
      super(message || 'Posted data is not correct or incompleted', 400);
    }
  };

 // https://gist.github.com/slavafomin/b164e3e710a6fc9352c934b9073e7216