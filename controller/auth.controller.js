const { StatusCodes } = require('http-status-codes')
const User = require("../model/user.model")


//register
const register = async (req,res) => {
    try {

        const extEmail = await User.findOne({ email: req.body.email })
            if(extEmail)
             return res.status(StatusCodes.BAD_REQUEST).json({ msg:`${ req.body.email} already exists`})

        const extMobile = await User.findOne({ mobile: req.body.mobile})
            if(extMobile)
             return res.status(StatusCodes.BAD_REQUEST).json({ msg:`${ req.body.mobile} already exists`})

        const newUser = await User.create(req.body)

        res.status(StatusCodes.OK).json({ msg: "User registerd successfully",  newUser })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

//login
const login = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "login"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}


//logout
const logout = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "logout"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}


//token
const getToken = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "get Token"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

//current log user info
const loggedUser = async (req,res) => {
    try {
        res.status(StatusCodes.OK).json({msg : "logged User"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

module.exports = { register, login, logout, getToken, loggedUser }