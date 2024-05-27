const getUser = (req,res) => {
    res.send("Get this singular user")
}

const CreateUser = (req,res) => {
    res.send("Creating the user")
}

const DeleteUser = (req,res) => {
    res.send("Deleting the user")
}

const UpdateUser = (req,res) => {
    res.send("Updating the user")
}

const getAllUsers = (req,res) => {
    res.send("Get All the users")
}

module.exports = {
    getUser,
    CreateUser,
    DeleteUser,
    UpdateUser,
    getAllUsers
}