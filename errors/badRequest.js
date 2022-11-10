const CustomError = require("./customError");

class NotFoundError extends CustomError {
    constructor (message){
        super(message);
        this.statusCode = 400
    }
}

module.exports = NotFoundError;