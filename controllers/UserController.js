const User = require('../models/user')
const asyncWrapper = require('../middlewares/aync')

const getUser = asyncWrapper ( async (req,res) => {
    const {id} = req.params
    console.log(id)
    const user = await User.findById(id);
    if(!user){
        res.status(404).json({msg : "No such user Exists"});
    }
    res.status(200).json(user)
})


const DeleteUser = asyncWrapper(async (req,res) => {
    const {id} = req.params;
    const deletedUser = await User.findByIdAndDelete({_id : id});

    if(!deletedUser){
        res.status(404).json({msg : "No such user Exists"});
    }

    res.status(200).json(deletedUser)
})

const UpdateUser = asyncWrapper (async(req,res) => {
    const {id} = req.params;
    const updatedInfo = req.body;

    const user = await User.findByIdAndUpdate(id, updatedInfo);

    if(!user){
        res.status(404).json({msg : "No such user Exists"});
    }

    const updatedUser = await User.findById(id)

    res.status(200).json(updatedUser)
})

const getAllUsers = asyncWrapper( async(req,res) => {
    const AllUsers = await User.find({});
    res.status(200).json({
        users: AllUsers,
        nbHits : AllUsers.length
    })
})

module.exports = {
    getUser,
    DeleteUser,
    UpdateUser,
    getAllUsers
}