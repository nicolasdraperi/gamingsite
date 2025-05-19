import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const GameForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        hoursPlayed: '',
        note: '',
        finished: false,
        imageUrl: '',
        tags: []
    });

    const availableTags = ['RPG', 'Action', 'Aventure', 'Indie', 'Stratégie', 'FPS', 'Multijoueur','Sandbox','Clicker','Horreur'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleTagSelect = (e) => {
        const tag = e.target.value;
        if (tag && !formData.tags.includes(tag)) {
            setFormData({ ...formData, tags: [...formData.tags, tag] });
        }
    };

    const removeTag = (tagToRemove) => {
        setFormData({
            ...formData,
            tags: formData.tags.filter(tag => tag !== tagToRemove)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ⚠️ Optionnel : validation de la note
        const parsedNote = parseFloat(formData.note);
        if (isNaN(parsedNote) || parsedNote < 0 || parsedNote > 100) {
            alert('La note doit être entre 0 et 100');
            return;
        }

        const payload = {
            ...formData,
            hoursPlayed: parseFloat(formData.hoursPlayed),
            note: parsedNote,
        };

        fetch(`${process.env.REACT_APP_API_URL}/api/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                confetti({ // 🎉✨
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0 }
                });

                setFormData({
                    name: '',
                    hoursPlayed: '',
                    note: '',
                    finished: false,
                    imageUrl: '',
                    tags: []
                });
            })
            .catch(error => {
                console.error("Erreur lors de l’ajout du jeu :", error);
                alert('Erreur lors de l’ajout ❌');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white/60 p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">➕ Ajouter un Jeu</h2>

            <label className="block mb-2">Nom du jeu</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mb-4"
                required
            />

            <label className="block mb-2">Heures jouées</label>
            <input
                type="number"
                name="hoursPlayed"
                value={formData.hoursPlayed}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mb-4"
                required
            />

            <label className="block mb-2">Note (sur 100)</label>
            <input
                type="number"
                step="1"
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mb-4"
                required
            />

            <label className="block mb-2">Image (URL)</label>
            <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mb-4"
            />

            <label className="block mb-2">Statut</label>
            <label className="flex items-center mb-4">
                <input
                    type="checkbox"
                    name="finished"
                    checked={formData.finished}
                    onChange={handleChange}
                    className="mr-2"
                />
                Terminé
            </label>

            <label className="block mb-2">Tags</label>
            <select
                onChange={handleTagSelect}
                className="w-full border rounded px-3 py-2 mb-2"
                defaultValue=""
            >
                <option value="" disabled>Choisir un tag</option>
                {availableTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>

            <div className="flex flex-wrap gap-2 mb-4">
                {formData.tags.map(tag => (
                    <span
                        key={tag}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-purple-200"
                        onClick={() => removeTag(tag)}
                    >
            {tag} ✕
          </span>
                ))}
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Ajouter le jeu
            </button>
        </form>
    );
};

export default GameForm;
