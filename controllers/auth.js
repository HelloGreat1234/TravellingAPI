const asyncWrapper = require('../middlewares/aync')
const User = require('../models/user')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const BadRequestError = require('../errors/BadRequestError')
const UnAuth = require('../errors/Unauthenticated')
const bcrypt = require('bcryptjs')
const { StatusCodes } = require('http-status-codes')

const registerUser = asyncWrapper( async (req,res)=>{

    const newUser = await User.create(req.body)
    newUser.getName();
    res.status(201).json(newUser)
})

const loginUser = asyncWrapper( async (req,res)=>{

    const {email, password} = req.body;

    if(!email || !password){
        throw new BadRequestError("Provide email and password")
    }

    const user = await User.findOne({email : email})

    if(!user){
        throw new UnAuth("User not found")
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect){
        throw new UnAuth("Incorrect Credentials")
    }

    const token = user.getToken()

    console.log("Logging in USER...");
    res.status(StatusCodes.OK).json({msg : "User logged in",tok : token});
})

module.exports = {
    registerUser,
    loginUser
}