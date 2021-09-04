const router = require('express').Router();
const multer = require('multer');
const path  = require('path');
const Video = require('../models/Vidoe');

const storeVideo = multer.diskStorage({
    destination: './upload/videos',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storeVideo,
})

router.get('/', (req, res) => {
    res.send("From the separate file!");
});

router.post('/', upload.single('content'), (req, res) => {
    console.log(req.file);
    // const post = new Post({
    //     title: req.body.title,
    //     description: req.body.description
    // });

    // post.save()
    //     .then(data => {
    //         res.json(data);
    //     })
    //     .catch(err => {
    //         res.json({message: err});
    //     });
});


module.exports = router;