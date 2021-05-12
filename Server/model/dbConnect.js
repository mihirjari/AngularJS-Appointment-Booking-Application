const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://mihir:alxMDciePVrXjfkt@cluster0.fdji1.mongodb.net/AppointmentsDB?retryWrites=true&w=majority';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {

    console.log("Connected to Database successfully!");
});

mongoose.connection.on('error', (err) => {

    console.log('Mongoose connection error : ' +err);
});
mongoose.connection.on('disconnected', () => {

    console.log('Mongoose disconnected');
});

require('./appointment');