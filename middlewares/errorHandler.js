const customError = require('../errors/customError')

const errorHandler = (err,req,res,next) => {
    if(err instanceof customError){
        res.status(err.statusCode).json({
            msg : err.message
        })
    }
}

module.exports = errorHandler