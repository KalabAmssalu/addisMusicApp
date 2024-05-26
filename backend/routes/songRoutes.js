const express = require('express')
const router = express.Router();
const songController = require('../controllers/songController')

// Song routes
router.post('/songs', songController.createSong);
router.get('/songs', songController.getAllSongs);
router.get('/songs/:id', songController.getSongById);
router.put('/songs/:id', songController.updateSongById);
router.delete('/songs/:id', songController.deleteSongById);

module.exports = router;