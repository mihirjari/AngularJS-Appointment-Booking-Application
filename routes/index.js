var express = require('express');
var router = express.Router();
const appointmentCtrl = require('../Server/controller/appointments');

router.get('/', appointmentCtrl.getHomePage);
router.get('/appointments', appointmentCtrl.getAllAppointments);
router.get('/appointment/:id', appointmentCtrl.getSingleAppointment);

module.exports = router;
