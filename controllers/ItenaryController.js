const {StatusCodes} = require("http-status-codes")
// require('dotenv').config()

const getItenaries = (req,res) => {
    res.status(StatusCodes.ACCEPTED).json({
        msg : "These are you itenaries"
    })
}

module.exports = {
    getItenaries
}