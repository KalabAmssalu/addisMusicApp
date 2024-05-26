const express = require('express')
const router = express.Router();
const albumController = require('../controllers/AlbumController')
const protect = require('../middleware/authMiddleware')

// Album routes
router.post('/albums', albumController.createAlbum);
router.get('/albums', albumController.getAllAlbums);
router.get('/albums/:id', albumController.getAlbumById);
router.put('/albums/:id', albumController.updateAlbumById);
router.delete('/albums/:id', albumController.deleteAlbumById);

module.exports = router;
