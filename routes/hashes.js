const express = require("express");
const { hashes } = require("../controllers/hashes");
const router = express.Router();

router.get("/hashes", hashes);


module.exports = router;