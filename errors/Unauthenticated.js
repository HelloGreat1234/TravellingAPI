const customError = require('../errors/customError')
const {StatusCodes} = require('http-status-codes')

class UnAuth extends customError{
    constructor(error){
        super(error)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuth;