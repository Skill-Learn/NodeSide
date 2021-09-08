const router = require("express").Router();
const User = require("../models/User");
var jwt = require("jsonwebtoken");

// route for sign up
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  var hashedPass = require("crypto")
    .createHash("sha256")
    .update(password)
    .digest("hex")
    .toString();
  console.log(hashedPass);
  // Check if user already exists
  let user = await User.findOne({ email });

  if (user) {
    return res.json({ msg: "Email already taken" });
  }

  user = new User({
    email,
    password: hashedPass,
  });
  // if the user is new add user to the database
  await user.save();
  var token = jwt.sign({ id: user.id }, "password");
  res.json({ token: token });
});

// route for login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  let user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    return res.json({ msg: "no user found with that email" });
  }
  if (
    user.password !==
    require("crypto")
      .createHash("sha256")
      .update(password)
      .digest("hex")
      .toString()
  ) {
    return res.json({ msg: "password is not correct" });
  }

  var token = jwt.sign({ id: user.id }, "password");
  return res.json({ token: token });
});

module.exports = router;
