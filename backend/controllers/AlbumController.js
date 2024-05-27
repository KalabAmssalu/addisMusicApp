const Album = require('../models/Album');

exports.createAlbum = async (req, res) => {
    try {
        const album = new Album(req.body);
        await album.save();
        res.status(201).send(album);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('artist');
        res.status(200).send(albums);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate('artist');
        if (!album) {
            return res.status(404).send();
        }
        res.status(200).send(album);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.updateAlbumById = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('artist');
        if (!album) {
            return res.status(404).send();
        }
        res.status(200).send(album);
    } catch (error) {
        res.status(400).send(error);
    }
};


exports.deleteAlbumById = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (!album) {
            return res.status(404).send();
        }
        res.status(200).send(album);
    } catch (error) {
        res.status(500).send(error);
    }
};
