const express = require("express");
const {
    getAppointment,
    getAllAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
} = require("../controller/AppointmentController");

const router = express.Router();

router.route("/appointments").get(getAllAppointments);

router.route("/appointments/:id").get(getAppointment);

router.route("/appointments").post(createAppointment);

router.route("/appointments/:id").put(updateAppointment);

router.route("/appointments/:id").delete(deleteAppointment);

module.exports = router;