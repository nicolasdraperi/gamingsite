import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState('');
    const [showFinishedOnly, setShowFinishedOnly] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/games`)
            .then(res => res.json())
            .then(data => setGames(data))
            .catch(err => console.error("Erreur lors de la récupération des jeux 🎮❌", err));
    }, []);

    const goToDetails = (id) => {
        navigate('/details', { state: { id } });
    };

    // 🧠 Filtres appliqués
    const filteredGames = games.filter(game => {
        const matchesSearch = game.name.toLowerCase().includes(search.toLowerCase()) ||
            game.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));

        const matchesFinished = showFinishedOnly ? game.finished : true;

        return matchesSearch && matchesFinished;
    });

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🎮 Liste des Jeux</h2>

            {/* 🔍 Barre de recherche */}
            <SearchBar
                search={search}
                setSearch={setSearch}
                showFinishedOnly={showFinishedOnly}
                setShowFinishedOnly={setShowFinishedOnly}
            />

            {/* 🧩 Résultats filtrés */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGames.length > 0 ? (
                    filteredGames.map(game => (
                        <div key={game._id} className="p-4 rounded-lg shadow-lg border bg-white/60 backdrop-blur">
                        <h3 className="text-xl font-semibold text-purple-700">{game.name}</h3>
                            <p><strong>🎮 Heures jouées :</strong> {game.hoursPlayed}h</p>
                            <p><strong>⭐ Note :</strong> {game.note}/10</p>
                            <p><strong>🏷️ Tags :</strong> {game.tags.join(', ')}</p>
                            <p><strong>📌 Terminé :</strong> {game.finished ? 'Oui ✅' : 'Non ❌'}</p>
                            <button
                                onClick={() => goToDetails(game._id)}
                                className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Voir les détails
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Aucun jeu ne correspond à ta recherche 😢</p>
                )}
            </div>
        </div>
    );
};

export default GameList;
