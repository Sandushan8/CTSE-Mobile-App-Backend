const Pets = require("../models/PetModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Get Pet Details
exports.getPetDetails = catchAsyncErrors(async (req, res, next) => {
    const pets = await Pets.find();

    res.status(200).json({
        success: true,
        pets,
    });
})

// Get Single Pet Details
exports.getSinglePetDetails = catchAsyncErrors(async (req, res, next) => {
    const pet = await Pets.findById(req.params.id);

    if (!pet) {
        return next(new ErrorHandler("Pet is not found with this id", 400));
    }

    res.status(200).json({
        success: true,
        pet,
    });
})

// Delete Pet
exports.deletePet = catchAsyncErrors(async (req, res, next) => {
    const pet = await Pets.findById(req.params.id);

    if (!pet) {
        return next(new ErrorHandler("Pet is not found with this id", 400));
    }

    await pet.deleteOne();

    res.status(200).json({
        success: true,
        message: "Pet is deleted",
    });
})

// Create Pet
exports.createPet = catchAsyncErrors(async (req, res, next) => {

    const { name, species, breed, gender, color, dateOfBirth } = req.body;

    const pet = await Pets.create({
        name,
        species,
        breed,
        gender,
        color,
        dateOfBirth,
    });

    res.status(200).json({
        success: true,
        pet,
    });
})

// Update Pet
exports.updatePet = catchAsyncErrors(async (req, res, next) => {

    const newPetData = {
        id: req.body.id,
        name: req.body.name,
        species: req.body.species,
        breed: req.body.breed,
        gender: req.body.gender,
        color: req.body.color,
        dateOfBirth: req.body.dateOfBirth,
    };

    const updatedPet = await Pets.findByIdAndUpdate(req.body.id, newPetData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        updatedPet
    })
    
})