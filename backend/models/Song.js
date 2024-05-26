const mongoose = require('mongoose');

// Creating a song schema
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: false
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

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
