const express = require('express')
const router = express.Router();
const statisticsController = require('../controllers/StatisticsController')


// Statistics route
router.get('/statistics', statisticsController.getStatistics); // Add the statistics route

module.exports = router;