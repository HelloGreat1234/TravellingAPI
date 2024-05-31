const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const loginAuth = (req,res,next) =>{
    const token = req.headers.authorization;
    console.log(token);

    if(!token){
        res.status(StatusCodes.UNAUTHORIZED).json({
            "error" : "User not logged in "
        })
    }

    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        console.log(decoded)
        next()
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            error : "User not logged in "
        })
    }
}

module.exports = loginAuth