const router = require('express').Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
});

module.exports = router;

