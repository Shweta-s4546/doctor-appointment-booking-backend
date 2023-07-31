const { StatusCodes } = require('http-status-codes')

//get service
const getService = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "get service"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//get single service
const getSingleServices= async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "get sinlge service"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//add service
const addService = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "add service"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//update service
const updateService = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "update service"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}
//delete service
const deleteService = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "delete service"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

module.exports = { getService, getSingleServices, addService, updateService, deleteService}





