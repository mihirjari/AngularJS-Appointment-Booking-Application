var express = require('express');
var router = express.Router();

const apiCtrl = require('../controller/apiController');

router.route('/appointments').get(apiCtrl.getAppointments).post(apiCtrl.addAppointment);
router.route('/appointment/:id').get(apiCtrl.getSingleAppointment).put(apiCtrl.updateAppointment).delete(apiCtrl.deleteAppointment);

module.exports = router;