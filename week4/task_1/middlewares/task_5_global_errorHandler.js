const {internalServerError} = require('../handlers/errors')
exports.globalErrorHandler = ((err, req, res, next) => {
  internalServerError(req,err)
});
