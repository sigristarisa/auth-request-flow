const jwt = require("jsonwebtoken");

const mockUser = {
  username: "authguy",
  password: "mypassword",
  profile: {
    firstName: "Chris",
    lastName: "Wolstenholme",
    age: 43,
  },
};

const createToken = (req, res) => {
  const { username, password, profile } = mockUser;
  const payload = {};
  payload["username"] = username;
  payload["profile"] = profile;

  console.log("extract password: ", password);

  const token = jwt.sign(payload, "mypassword");
  res.json({ token });
};

const verifyToken = (req, res) => {
  const [, token] = req.headers.authorization.split(" ");
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    res.json(decodedToken);
  } catch (e) {
    res.status(401).json({ error: "Token not provided - User not allowed" });
  }
};

module.exports = { createToken, verifyToken };
