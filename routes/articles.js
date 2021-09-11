const router = require('express').Router();
const Article = require('../models/Article');
const Course = require('../models/course');
const { route } = require('./videos');

router.get('/', async (req, res) => {
    try{
        console.log("articles requested");
        const articles = await Article.find();
        console.log(articles);
        res.status(200).send(articles);
        
    }
    catch(err){
        res.json({message: err});
    }
});

router.get('/test', (req, res) => {
    res.send("From Node")
})
router.get('/courses', async (req, res) => {
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    }
    catch(err){
        res.json({message: err});
    }
} );
router.post('/', (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
    });

    article.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});
router.post('/courses', (req, res) => {
    console.log("post requested")
    const article = new Article({
        id: req.body.id,
        code: req.body.code,
        title: req.body.title,
        ects: req.body.ects,
        description: req.body.description,
    });

    article.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});


module.exports = router;