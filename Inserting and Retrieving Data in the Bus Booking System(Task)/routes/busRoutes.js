const express = require("express");
const router = express.Router();
const busController = require("../controller/busController")

router.post("/addBus",busController.addBus)
router.get("/getBus/:seats",busController.getAvailableSeats)
module.exports = router;