const express = require('express');
const connectDB = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// Connexion à MongoDB
connectDB();

// Routes
app.use('/api/games', gameRoutes);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
