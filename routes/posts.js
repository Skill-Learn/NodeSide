const router = require('express').Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("From the separate file!");
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});


module.exports = router;