const Artist = require('../models/Artist');

// Create a new artist
exports.createArtist = async (req, res) => {
    try {
        const artist = new Artist(req.body);
        await artist.save();
        res.status(201).send(artist);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all artists
exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.status(200).send(artists);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get artist by ID
exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (!artist) {
            return res.status(404).send();
        }
        res.status(200).send(artist);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update artist by ID
exports.updateArtistById = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!artist) {
            return res.status(404).send();
        }
        res.status(200).send(artist);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete artist by ID
exports.deleteArtistById = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndDelete(req.params.id);
        if (!artist) {
            return res.status(404).send();
        }
        res.status(200).send(artist);
    } catch (error) {
        res.status(500).send(error);
    }
};
