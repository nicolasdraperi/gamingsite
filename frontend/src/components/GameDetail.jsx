import React, { useEffect, useState } from 'react';
import CountUp from "react-countup";
import { useNavigate } from 'react-router-dom';






const GameDetail = ({ gameId }) => {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (!gameId) return;

        fetch('http://localhost:5050/api/games/details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: gameId })
        })
            .then(res => res.json())
            .then(data => {
                setGame(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur de chargement du jeu 🎮", error);
                setLoading(false);
            });
    }, [gameId]);
    const handleDelete = () => {
        if (!gameId) return;

        const confirmDelete = window.confirm("Tu es sûr de vouloir supprimer ce jeu ?");

        if (!confirmDelete) return;

        fetch('http://localhost:5050/api/games/', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: gameId })
        })
            .then(res => {
                if (!res.ok) throw new Error("Suppression échouée");
                navigate('/');
            })
            .catch(err => {
                console.error("Erreur lors de la suppression :", err);
                alert("Une erreur est survenue lors de la suppression ❌");
            });
    };

    if (loading) return <p>Chargement des infos du jeu...</p>;
    if (!game) return <p>Aucune info trouvée pour ce jeu.</p>;

    return (
        <div className="max-w-xl mx-auto mt-8 bg-white/60 rounded-xl shadow-lg p-6">
            <div className="flex justify-end mb-2">
                <button
                    onClick={handleDelete}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Supprimer le jeu"
                >
                    🗑️
                </button>
            </div>

            <img src={game.imageUrl} alt={game.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2">{game.name}</h2>
            <p><strong>🎮 Heures jouées :</strong> <CountUp end={game.hoursPlayed} duration={2} suffix="h" /></p>
            <p><strong>⭐ Note :</strong> {game.note}/10</p>
            <p><strong>🏷️ Tags :</strong> {game.tags.join(', ')}</p>
            <p><strong>📌 Terminé :</strong> {game.finished ? 'Oui ✅' : 'Non ❌'}</p>
        </div>
    );
};

export default GameDetail;
