const doctorRoute = require('express').Router()
const {getDoctors, getSingle, addDoctors,updateDoctors, deleteDoctors} = require('../controller/doctor.controller')


// --- read all doctors info -- get
doctorRoute.get(`/all`, getDoctors)

//---read single doctor info---
doctorRoute.get(`/single/:id`, getSingle)

//--add new doctor info --- post
doctorRoute.post(`/add`, addDoctors)

//---update doctor info --patch
doctorRoute.patch(`/update/:id`, deleteDoctors)

//--delete doctor info-- delete
doctorRoute.delete(`/delete/:id`, deleteDoctors)

module.exports =doctorRoute