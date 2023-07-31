const userRoute = require('express').Router()
const { readAllUsers, getSingleUser} = require(`../controller/user.controler`)

//read all userrr --- get
userRoute.get(`/all`, readAllUsers)

//get single user ---get
userRoute.get(`/single/:id`, getSingleUser)

module.exports = userRoute