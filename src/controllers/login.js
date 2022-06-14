const jwt = require("jsonwebtoken");

const createToken = (req, res) => {
  const { username, password, profile } = req.body;
  const payload = {};
  payload["username"] = username;
  payload["profile"] = profile;

  const token = jwt.sign(payload, password);
  res.json({ token });
};

module.exports = { createToken };
