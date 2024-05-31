const asyncWrapper = require('../middlewares/aync')
const User = require('../models/user')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const registerUser = asyncWrapper( async (req,res)=>{

    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
})

const loginUser = asyncWrapper( async (req,res)=>{

    var token = jwt.sign({
        exp : Math.floor(Date.now() / 1000) + (60 * 60),
        data : req.body
    },process.env.SECRET_KEY)

    console.log(token)

    console.log("Logging in USER...");
    res.status(200).json({msg : "User logged in",tok : token});
})

module.exports = {
    registerUser,
    loginUser
}