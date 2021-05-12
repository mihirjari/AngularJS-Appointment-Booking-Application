const request = require('request');

const getHomePage = (req, res) => {

    res.rendeR('index', {title: 'Appointment Booking System'});
}

const getAllAppointments = (req, res) => {

    const url = "http://localhost:3000/api/appointments";

    var requestOptions = {

        url: url,
        method: 'GET',
        json: {}
    };

    request(requestOptions, (err, responseCode, data) => {

        res.send(data);
    });
}

const getSingleAppointment = (req, res) => {

    const id = req.params.id;
    const url = "http://localhost:3000/api/appointment/"+id;

    var requestOptions = {
        url: url,
        method: 'GET',
        json: {}
    };

    request(requestOptions, (err, responseCode, data) => {

        console.log(data);
    });
}

module.exports = {getHomePage, getAllAppointments, getSingleAppointment};