const express = require('express');
const { saveGameData, getGameHistory } = require('../controllers/memoryController');
const router = express.Router();

// Route to save game data
router.post('/save', saveGameData);
router.get('/history', getGameHistory);


module.exports = router;
