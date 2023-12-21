const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost:27017/myUFCdb'; // Replace with your MongoDB URI
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err));

    // Connection successful
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbUri);
});

// Connection error
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

// Connection disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports = mongoose;

require('./db');

