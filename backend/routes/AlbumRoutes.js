const express = require('express')
const router = express.Router();
const albumController = require('../controllers/AlbumController')
const protect = require('../middleware/authMiddleware')

// Album routes
router.post('/albums', protect, albumController.createAlbum);
router.get('/albums', protect, albumController.getAllAlbums);
router.get('/albums/:id', protect, albumController.getAlbumById);
router.put('/albums/:id', protect, albumController.updateAlbumById);
router.delete('/albums/:id', protect, albumController.deleteAlbumById);

module.exports = router;
