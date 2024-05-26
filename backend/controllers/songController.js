const Song = require('../models/Song');

// Create a new song
exports.createSong = async (req, res) => {
    try {
        const song = new Song(req.body);
        await song.save();
        res.status(201).send(song);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all songs
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find().populate('artist').populate('album');
        res.status(200).send(songs);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get song by ID
exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id).populate('artist').populate('album');
        if (!song) {
            return res.status(404).send();
        }
        res.status(200).send(song);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update song by ID
exports.updateSongById = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('artist').populate('album');
        if (!song) {
            return res.status(404).send();
        }
        res.status(200).send(song);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete song by ID
exports.deleteSongById = async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);
        if (!song) {
            return res.status(404).send();
        }
        res.status(200).send(song);
    } catch (error) {
        res.status(500).send(error);
    }
};
