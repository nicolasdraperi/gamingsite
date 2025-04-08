const express = require('express');
const router = express.Router();
const {
    getGames,
    createGame,
    generateDeleteCode,
    deleteAllGames,
    deleteGame,
    getGameDetails
} = require('../controllers/gameController');

router.get('/', getGames);
router.post('/', createGame);
router.post('/generate-delete-code', generateDeleteCode);
router.delete('/destroy-all', deleteAllGames);
router.delete('/', deleteGame);
router.post('/details', getGameDetails);


module.exports = router;
