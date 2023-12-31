const { StatusCodes } = require('http-status-codes')
const User = require("../model/user.model")
const bcrypt = require('bcryptjs')
const creatAccessToken = require('../util/token')
const jwt = require('jsonwebtoken')



//register
const register = async (req,res) => {
    try {

        const extEmail = await User.findOne({ email: req.body.email })
            if(extEmail)
             return res.status(StatusCodes.BAD_REQUEST).json({ msg:`${ req.body.email} already exists`})

        const extMobile = await User.findOne({ mobile: req.body.mobile})
            if(extMobile)
             return res.status(StatusCodes.BAD_REQUEST).json({ msg:`${ req.body.mobile} already exists`})

             const encPass = await bcrypt.hash(req.body.password,10) // password hash (10 bit)

        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: encPass
        })

        res.status(StatusCodes.OK).json({ msg: "User registerd successfully",  newUser })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

//login
const login = async (req,res) => {
    try {
        const user = req.body

        //user email exists or not
        const extUser = await User.findOne({ email: user.email})
        if(!extUser)
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `User ${user.email} doesn't exists`})

        //verify the password
        const isMatch = await bcrypt.compare(user.password,extUser.password)
            if(!isMatch)
                return res.status(StatusCodes.UNAUTHORIZED).json({ msg: `passwords aren't matched`})

        //check user active or not
        if(!extUser.isActive)
            return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Sorry, your account is blocked" })

        //generate token
        const accessToken = creatAccessToken({ _id: extUser._id})

        //store a copy of access token in cookies
        res.cookie("loginToken", accessToken, {
            httpOnly: true,
            signed: true,
            path: `/api/auth/getToken`,
            maxAge: 1 * 24 * 60 * 60 * 1000
        })

        res.status(StatusCodes.OK).json({ msg: "Login successful", accessToken })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}


//logout
const logout = async (req,res) => {
    try {
        res.clearCookie('loginToken', {
            path:`/api/auth/getToken`
        })
        res.status(StatusCodes.OK).json({msg : "logout successfull"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}


//token
const getToken = async (req,res) => {
    try {
        const fToken = req.signedCookies.loginToken
            
                //token verification logic
                jwt.verify(fToken, process.env.API_ACCESS_SECRET, (err,resp) => {
                    if(err)
                        return res.status(StatusCodes.UNAUTHORIZED).json({ msg: `Unauthorized, Invalid login token`})

                       // const accessToken = creatAccessToken({ _id: resp._id})

                    res.status(StatusCodes.OK).json({ accessToken: fToken })
                })
       // res.status(StatusCodes.OK).json({ fToken })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

//current log user info
const loggedUser = async (req,res) => {
    try {
        let user = await User.findById({ _id: req.userId}).select('-password')
            if(!user)
                return res.status(StatusCodes.NOT_FOUND).json({msg: `requested user id not found`})

        res.status(StatusCodes.OK).json({ user })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})
    }
}

module.exports = { register, login, logout, getToken, loggedUser }