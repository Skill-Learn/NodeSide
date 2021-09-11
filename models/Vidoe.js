const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String, 
        default: "https://localhost:3000/upload/images/videoThumb.png"
    },
    date:  {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Videos', VideoSchema);