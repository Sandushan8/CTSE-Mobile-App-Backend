const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter pet's Name"],
        minlength: [3, "Please enter a name atleast 3 characters"],
        maxlength: [15, "Name can not big than 15 characters"],
    },
    species: {
        type: String,
        enum: ["Dog", "Cat"],
        default: "DOg",
    },
    breed: {
        type: String,
        required: [true, "Please enter pet's Breed"],
        minlength: [3, "Please enter a name atleast 3 characters"],
        maxlength: [20, "Name can not big than 15 characters"],
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        default: "male",
    },
    color: {
        type: String,
        required: [true, "Please enter pet's Color"],
        minlength: [3, "Please enter a name atleast 3 characters"],
        maxlength: [15, "Name can not big than 15 characters"],
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Please enter pet's Date of Birth"],
    }
})

module.exports = mongoose.model("Pets", petSchema);