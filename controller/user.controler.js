const { StatusCodes } = require('http-status-codes')

//get all user data
const readAllUsers = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "read all users"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//get single user data
const getSingleUser = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "get single user"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}


module.exports = { readAllUsers, getSingleUser}