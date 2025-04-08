const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hoursPlayed: { type: Number, default: 0 },
    tags: [String],
    finished: { type: Boolean, default: false },
    note: { type: Number, min: 0, max: 10 },
    imageUrl: { type: String }
}, {
    timestamps: true
});


module.exports = mongoose.model('Game', gameSchema);
