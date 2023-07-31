const serviceRoute = require('express').Router()
const { getService, getSingleServices,addService,updateService,deleteService} = require('../controller/service.controller')

//all services --- get
serviceRoute.get(`/all`, getService)

//single service ---- get
serviceRoute.get(`/single/:id`, getSingleServices)

//add new services--- post
serviceRoute.post(`/add`, addService)

//update sevrice --- patch
serviceRoute.patch(`/update/:id`, updateService)

//delete servive ----delete
serviceRoute.delete(`/delete/:id`, deleteService)


module.exports = serviceRoute
