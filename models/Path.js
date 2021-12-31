const mongoose = require('mongoose')
const PathSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },

    description: {
        type: String,
        trim: true,
        required: true,

    },

    contact: {
        type: String,
        required: true,

    },

})

const Path = mongoose.model('Path', PathSchema)
module.exports = Path