const Song = require('../models/Song');
const Album = require('../models/Album');
const Artist = require('../models/Artist');

exports.getStatistics = async (req, res) => {
    try {
        const totalSongs = await Song.countDocuments();
        const totalArtists = await Artist.countDocuments();
        const totalAlbums = await Album.countDocuments();

        const genreStats = await Song.aggregate([
            {
                $group: {
                    _id: '$genre',
                    count: { $sum: 1 }
                }
            }
        ]);

        const totalGenres = genreStats.length;

        res.status(200).send({
            totalSongs,
            totalArtists,
            totalAlbums,
            totalGenres,
            songsPerGenre: genreStats
        });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch statistics' });
    }
};
