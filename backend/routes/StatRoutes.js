const express = require('express')
const router = express.Router();
const statisticsController = require('../controllers/StatisticsController')
const protect = require('../middleware/authMiddleware')

// Statistics route
router.get('/statistics', protect, statisticsController.getStatistics); // Add the statistics route

module.exports = router;