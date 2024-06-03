class customError extends Error{
    constructor(error,statusCode){
        super(error)
        this.statusCode = statusCode
    }
}

module.exports = customError
