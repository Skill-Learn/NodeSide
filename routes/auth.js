// const router = require("express").Router();

// // Importing useful things for validation
// const bcrypt = require("bcrypt");
// const validator = require("validator");

// // Import model
// const User = require("../../models/User");

// // Importing jwt and secret key for password reset
// const jwt = require("jsonwebtoken");
// const secret_key = process.env.SECRET_KEY;


// router.post('/register', async (req, res) => {
//     try{
//         const newUser = new User({
//             username: req.body.username,
//             password: req.body.password,
//             email: req.body.email,
//             subscriptions: [[]],
//         });

//         const user = await newUser.save();
//     }
//     catch(err){
//         res.status(400).json({error: err});
//     }
// });

// router.post("/login", async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       const user = await User.login(username, password);
//       if (user) {
//         // Get user id
//         const userId = await user._id;
  
//         // Generate token
//         const token = jwt.sign(
//           {
//             data: userId,
//           },
//           secret_key,
//           { expiresIn: "1h" }
//         );
  
//         // Send token
//         res.status(200).json({
//           token: token,
//           name: user.username,
//           emailAddress: user.email,
//           role: user.role,
//         });
//       }
//       console.log("User Matched");
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


// module.exports = router;
