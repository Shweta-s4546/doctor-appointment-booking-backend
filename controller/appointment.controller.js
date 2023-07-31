const { StatusCodes } = require('http-status-codes')
//get appointment 
const getAppointments = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "all apponitment"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//single appointment
const getSingleAppointment = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "all single apponitment"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
// add appointment
const addAppointment = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "add apponitment"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//update appoinment
const updateAppointment = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "updateapponitment"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//delete appointment
const deleteppointment = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "delete apponitment"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

module.exports = { getAppointments, getSingleAppointment, addAppointment, deleteppointment, updateAppointment}








