const router = require('express').Router();
const Article = require('../models/Article');

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

router.post('/', (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        creator: req.body.creator,
        date: req.body.date,
    });

    article.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});
router.get('/:id', (req, res) => {
    const article =  Article.findById(req.params.id);

    try{
        res.send(article);
    }catch(err){
        res.json({message: err});
    }
    
});
router.patch('/:id', async (req, res) => {
    try{
        const article = await Article.updateMany(
            {_id: req.params.id},
            {set: {title: req.body.title} },
            {set: {description: req.body.description} },
            {set: {content: req.body.content} },
            {set: {creator: req.body.creator} },
            );
    } catch(err){
        res.json({message: err});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const removedArticle = await Article.remove({_id: req.params.id});
    } catch(err){
        res.json({message: err})
    }
})


module.exports = router;