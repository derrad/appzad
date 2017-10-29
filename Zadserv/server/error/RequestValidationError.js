module.exports = class extends require('./AppError') {
    constructor (fields) {
      // Overriding both message and status code.
      super('Request validation failed', 400);
      // Saving custom property.
      this.fields = fields || {};
    }
  };
  //https://gist.github.com/slavafomin/b164e3e710a6fc9352c934b9073e7216