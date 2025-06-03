const mongoose = require('mongoose');  // 
const { Schema } = mongoose;  // yahan per hum na Schema ko import kiya hai

const resultSchema = new Schema({  //
    student: {               // yahan per hum na student ki details ko define kiya hai
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    subject: {               // yahan per hum na subject ki details ko define kiya hai
        type: String,
        required: true,
    },
    marksObtained: {         // yahan per hum na marksObtained ki details ko define kiya hai
        type: Number,
        required: true,
    },
    totalMarks: {            // yahan per hum na totalMarks ki details ko define kiya hai
        type: Number,
        required: true,
    },
    assessmentType: {       // yahan per hum na assessmentType ki details ko define kiya hai
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Result', resultSchema); // yahan per hum na Result model ko export kiya hai

