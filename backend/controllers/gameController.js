const Game = require('../models/Game');

// Récupérer tous les jeux
const getGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des jeux.' });
    }
};

// Ajouter un jeu
const createGame = async (req, res) => {
    try {
        const { name, hoursPlayed, tags, finished, note, imageUrl } = req.body;
        const newGame = new Game({ name, hoursPlayed, tags, finished, note, imageUrl });
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de l’ajout du jeu.', error: error.message });
    }
};

let deleteCode = null;

// Génère un code de suppression sécurisé
const generateDeleteCode = (req, res) => {
    const code = Math.random().toString(36).slice(2) + Date.now().toString(36);
    deleteCode = code;
    res.status(200).json({ code }); // Tu pourrais l'afficher dans un dashboard sécurisé
};

// Supprime tous les jeux si le bon code est fourni
const deleteAllGames = async (req, res) => {
    const { code } = req.body;

    if (!code || code !== deleteCode) {
        return res.status(401).json({ message: 'Code de suppression invalide ou manquant ❌' });
    }

    try {
        await Game.deleteMany({});
        deleteCode = null; // Invalider le code après usage
        res.status(200).json({ message: 'Tous les jeux ont été supprimés ✅' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression.', error: error.message });
    }
};


// Supprimer un jeu
const deleteGame = async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: "ID manquant dans la requête ❌" });
    }

    try {
        const deletedGame = await Game.findByIdAndDelete(id);
        if (!deletedGame) {
            return res.status(404).json({ message: "Jeu non trouvé ❌" });
        }
        res.status(200).json({ message: "Jeu supprimé avec succès ✅", deletedGame });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression du jeu.", error: error.message });
    }
};

const getGameDetails = async (req, res) => {
    const { id } = req.body;

    if (!id) return res.status(400).json({ message: 'ID manquant dans la requête ❌' });

    try {
        const game = await Game.findById(id);
        if (!game) return res.status(404).json({ message: 'Jeu non trouvé ❌' });
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
};



module.exports = {
    getGames,
    createGame,
    generateDeleteCode,
    deleteAllGames,
    deleteGame,
    getGameDetails,
};

