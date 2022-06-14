const express = require("express");
const router = express.Router();

const { createToken, verifyToken } = require("./controllers/token");

router.post("/login", createToken);
router.get("/profile", verifyToken);

module.exports = router;
