const express = require('express')
const router = express.Router();
const artistController = require('../controllers/ArtistController')
const protect = require('../middleware/authMiddleware')

// Artist routes
router.post('/artists', artistController.createArtist);
router.get('/artists', artistController.getAllArtists);
router.get('/artists/:id', artistController.getArtistById);
router.put('/artists/:id', artistController.updateArtistById);
router.delete('/artists/:id', artistController.deleteArtistById);

module.exports = router;