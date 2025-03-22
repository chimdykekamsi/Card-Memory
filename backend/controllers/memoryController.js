const Save = require('../models/save');
const {validateRequiredFields} = require('../utils/validation');

exports.saveGameData = async (req, res) => {
    const { userID, gameDate, failed, difficulty, completed, timeTaken } = req.body;

    try {
        const requiredFields = ['userID', 'failed', 'difficulty', 'completed', 'timeTaken'];
        const missingFields = validateRequiredFields(req.body, requiredFields);
    
        if (missingFields) {
            return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
        }

        const newSave = new Save({
            userID,
            gameDate,
            failed,
            difficulty,
            completed,
            timeTaken,
        });

        await newSave.save(); 
        res.status(201).json({ message: 'Game data saved successfully' });
    } catch (error) {
        console.error('Error saving game data:', error);
        res.status(500).json({ message: 'Error saving game data', error });
    }
};

exports.getGameHistory = async (req, res) => {
    try {
        const gameHistory = await Save.find().sort({ gameDate: -1 }); // Sort by latest game
        res.status(200).json(gameHistory);
    } catch (error) {
        console.error('Error fetching game history:', error);
        res.status(500).json({ message: 'Error fetching game history', error });
    }
};
