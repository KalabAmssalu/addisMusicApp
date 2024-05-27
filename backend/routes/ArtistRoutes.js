const express = require('express')
const router = express.Router();
const artistController = require('../controllers/ArtistController')
const protect = require('../middleware/authMiddleware')

// Artist routes
router.post('/artists', protect, artistController.createArtist);
router.get('/artists', protect, artistController.getAllArtists);
router.get('/artists/:id', protect, artistController.getArtistById);
router.put('/artists/:id', protect, artistController.updateArtistById);
router.delete('/artists/:id', protect, artistController.deleteArtistById);

module.exports = router;