const Appointments = require("../models/AppointmentModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get all appointment details
exports.getAppointment = catchAsyncErrors(async (req, res, next) => {
    const appointments = await Appointments.find();

    res.status(200).json({
        success: true,
        appointments,
    });
})

// Get one appointment details
exports.getAllAppointments = catchAsyncErrors(async (req, res, next) => {
    const appointment = await Appointments.findById(req.params.id);

    if (!appointment) {
        return next(new ErrorHandler("Appointment is not found with id ", 400));
    }

    res.status(200).json({
        success: true,
        appointment,
    });
})

// Create appointment
exports.createAppointment = catchAsyncErrors(async (req, res, next) => {

    const { doctor, pet, appointmentDate } = req.body;

    const appointment = await Appointments.create({
        doctor,
        pet,
        appointmentDate
    });

    res.status(200).json({
        success: true,
        appointment,
    });
})

// Update appointment
exports.updateAppointment = catchAsyncErrors(async (req, res, next) => {

    const newAppointmentData = {
        id: req.body.id,
        doctor: req.body.doctor,
        pet: req.body.pet,
        appointmentDate: req.body.date,
    };

    const updatedAppointment = await Appointments.findByIdAndUpdate(req.body.id, newAppointmentData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        updatedAppointment
    })
    
})

// Delete appointment
exports.deleteAppointment = catchAsyncErrors(async (req, res, next) => {
    const appointment = await Appointments.findById(req.params.id);

    if (!appointment) {
        return next(new ErrorHandler("Appointment is not found with this id", 400));
    }

    await pet.deleteOne();

    res.status(200).json({
        success: true,
        message: "Appointment is deleted",
    });
})
