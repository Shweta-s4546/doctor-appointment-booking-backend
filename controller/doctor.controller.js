const { StatusCodes } = require('http-status-codes')

//get doctor
const getDoctors = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "get doctors"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

//get single doctor
const getSingle = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "get single doctors"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//add doctor
const addDoctors = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "add doctors"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//update doctor
const updateDoctors = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "update doctors"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//delete doctor
const deleteDoctors = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "delete doctors"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

module.exports = { getDoctors, getSingle, addDoctors, updateDoctors, deleteDoctors}









