const mongoose = require('mongoose');

var appointmentSchema = new mongoose.Schema({

    appointmentDate: {type: String, required: true},
    appointmentTime: {type: String, required: true}, 
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    contact: {type: String, maxlength: 10, required: true}
});

var appointmentModel = mongoose.model('Appointment', appointmentSchema, 'appointments');

module.exports = {appointmentModel};