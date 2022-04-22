const express = require("express");
const router = express.Router();

const { saveFeedback } = require('../controller/feedback');

router.post("/feedback", saveFeedback);


module.exports = router;