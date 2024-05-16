const Song = require('../models/Song');

// Controller function to create a new song
exports.createSong = async (req, res) => {
    try {
        const { title, artist, album, genre } = req.body;
        const newSong = new Song({ title, artist, album, genre });
        const savedSong = await newSong.save();
        res.status(201).json(savedSong);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to list all songs
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a song by ID
exports.updateSong = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSong = await Song.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete a song by ID
exports.deleteSong = async (req, res) => {
    try {
        const { id } = req.params;
        await Song.findByIdAndDelete(_id = id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
