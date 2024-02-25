const internalError = function (res, err) {
    if(!res || !err) return;
    return res.status(500).json({
        message : "Internal Server Error",
        Error : err,
    });
};


module.exports = internalError;