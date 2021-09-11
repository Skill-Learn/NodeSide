const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    code:  {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    ects: {
        type: String, 
        required: true,
    },
    description:  {
        type: String,
        default: "Description"
    }
});


module.exports = mongoose.model('Course', CourseSchema);