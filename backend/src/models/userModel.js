const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    otpToken: String,
    otpTokenExpiry: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})


module.exports = mongoose.model("User", userSchema);

