const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    doctor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, "Please select a doctor"]
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'Pet',
        required: [true, "Please select a pet"]
    },
    appointmentDate: {
        type: Date,
        required: [true, "Please pick the appointment date"]
    }
})

module.exports = mongoose.model("PetAppointments", appointmentSchema);