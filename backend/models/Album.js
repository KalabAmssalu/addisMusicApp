const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    coverUrl: {
        type: String,
    },
    releaseDate: {
        type: Date,
        required: true
    },
}, { timestamps: true });

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
