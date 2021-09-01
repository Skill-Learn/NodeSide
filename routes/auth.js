const router = require("express").Router();
const User = require("../models/User");

const Joi = require("joi");
const schema = {
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
};

router.get("/", (req, res) => {
    res.send("Some value");
});

router.post("/", async (req, res) => {
    // Validate the data before submitting
    const { error } = schema.validate;
    res.send(error);

    // const user = new User({
    //     username: req.body.username,
    //     password: req.body.password,
    // });

    // try {
    //     const savedUser = await user.save();
    //     res.send(savedUser);
    // } catch (err) {
    //     res.status(400).send(err);
    // }
});

module.exports = router;
