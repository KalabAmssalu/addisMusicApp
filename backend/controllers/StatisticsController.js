const Song = require('../models/Song');
const Album = require('../models/Album');
const Artist = require('../models/Artist');

exports.getStatistics = async (req, res) => {
    try {
        console.log("Fetching statistics...");

        const totalSongs = await Song.countDocuments();
        console.log(`Total Songs: ${totalSongs}`);

        const totalArtists = await Artist.countDocuments();
        console.log(`Total Artists: ${totalArtists}`);

        const totalAlbums = await Album.countDocuments();
        console.log(`Total Albums: ${totalAlbums}`);

        const genreStats = await Song.aggregate([
            {
                $group: {
                    _id: '$genre',  
                    count: { $sum: 1 }
                }
            }
        ]);
        console.log(`Genre Stats: ${JSON.stringify(genreStats)}`);

        const totalGenres = genreStats.length;
        console.log(`Total Genres: ${totalGenres}`);

        res.status(200).send({
            totalSongs,
            totalArtists,
            totalAlbums,
            totalGenres,
            songsPerGenre: genreStats
        });
    } catch (error) {
        console.error("Error fetching statistics: ", error);
        res.status(500).send({ error: 'Failed to fetch statistics' });
    }
};
