const { StatusCodes } = require('http-status-codes')

//all resgister users
const allRegUsers = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "all register users"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//all resgister doctors
const allRegDoctors = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "all register doctors"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

//all appointments
const allAppointments = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "all appointments"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//managing roles
const changeRole = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : " change role"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

module.exports = { allRegUsers, allRegDoctors, allAppointments, changeRole}


