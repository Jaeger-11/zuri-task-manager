const errorHandler = (err, req, res, next) => {
    let customError = {
        statusCode : err.statusCode || 500,
        message: err.message || "Oops!! something went wrong somewhere..."
    }
    return res.status(customError.statusCode).json({msg:customError.msg})
}

module.exports = errorHandler;