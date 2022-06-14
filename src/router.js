const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// const mockUser = {
//   username: "authguy",
//   password: "mypassword",
//   profile: {
//     firstName: "Chris",
//     lastName: "Wolstenholme",
//     age: 43,
//   },
// };

router.post("/login", (req, res) => {
  const { username, password, profile } = req.body;
  const payload = {};
  payload["username"] = username;
  payload["profile"] = profile;

  const token = jwt.sign(payload, password);

  console.log("this is the token", token);

  res.json({ token });
});

router.get("/profile", (req, res) => {});

module.exports = router;
