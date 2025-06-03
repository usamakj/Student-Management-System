const mongoose = require('mongoose');  


const studentSchema = new mongoose.Schema(
    { // ya schema define kar raha hai jo mongoose ke through database mein store hoga
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,                          // ya field unique hai, yani do students ka email same nahi ho sakta
        },
        DateOfBirth: {
            type: Date,
            Optional: true,
        },
        grade: {
            type: String,
        },

    }
);


module.exports = mongoose.model('Student', studentSchema);         // ya model export kar raha hai jisse hum baad mein use kar sakte hain