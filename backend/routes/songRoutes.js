const express = require('express')
const router = express.Router();
const songController = require('../controllers/songController')

router.post('/song', songController.createSong);
router.get('/song', songController.getAllSongs);
router.put('/song/:id', songController.updateSong);
router.delete('/song/:id', songController.deleteSong);

module.exports = router;