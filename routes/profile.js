const express = require('express');
const router = express.Router();

// Importing useful things for validation
// const bcrypt = require("bcrypt");
// const validator = require("validator");

// Import model
const User = require("../models/User");

// Importing jwt and secret key for password reset
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

router.patch('/update/:username', (req, res) => {
    User.findOneAndUpdate({ username: req.params.username }, {
            $set: {
                password: req.body.password,
                email: req.body.email,
                role: req.body.role
            }
        },
        (err, result) => {
            if (err) return res.status(500).json({ msg: err });
            const msg = { msg: "Profile updated successfully" };
            return res.json(msg);
        }
    );
});



module.exports = router;