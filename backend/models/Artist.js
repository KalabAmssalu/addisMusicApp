const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    artistUrl: {
        type: String,
        required: false
    },
}, { timestamps: true });

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
