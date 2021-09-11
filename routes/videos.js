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

router.post('/', upload.array('videoPlusThumb', 2), async (req, res) => {
    console.log(req.body);
    const video = new Video({
        title: req.body.title,
        description: req.body.description,
        // filePath: req.files[0].filename,
        // thumbnail: req.files[1].filename,
    });

    try{
        const saveVideo = await video.save();
        res.json(saveVideo);
    }catch(err){
        res.json({message: err});
    }
    
});


module.exports = router;