const express = require("express");
const router = express.Router();

const { createToken } = require("./controllers/login");

router.post("/login", createToken);

router.get("/profile", (req, res) => {});

module.exports = router;
