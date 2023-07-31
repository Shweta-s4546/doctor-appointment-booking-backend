const { getAppointments, addAppointment, updateAppointment,deleteppointment, getSingleAppointment} = require('../controller/appointment.controller')

const appointmentRoute = require('express').Router()

//-----read all --- get---
appointmentRoute.get(`/appointments/all`, getAppointments)

//---read single appointment
appointmentRoute.get(`/appointment/:id`, getSingleAppointment)

//----create apponiment -post-
appointmentRoute.post(`/appointment/add`, addAppointment)

//---edit apoointment
appointmentRoute.patch(`/appointment/edit/:id`, updateAppointment)

//--delete apponitment
appointmentRoute.delete(`/appointment/delete/:id`, deleteppointment)

module.exports = appointmentRoute