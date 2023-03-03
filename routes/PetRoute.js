const express = require("express");
const {
    getPetDetails,
    getSinglePetDetails,
    deletePet,
    createPet,
    updatePet,
} = require("../controller/PetController");

const router = express.Router();

router.route("/pets").get(getPetDetails);

router.route("/pets").post(createPet);

router.route("/pets/:id").delete(deletePet);

router.route("/pets/:id").get(getSinglePetDetails);

router.route("/pets/:id").put(updatePet);

module.exports = router;

