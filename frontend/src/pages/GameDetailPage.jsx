import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GameDetail from '../components/GameDetail';

const GameDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const gameId = location.state?.id;

    if (!gameId) {
        return (
            <div>
                <p>❌ Aucun jeu sélectionné</p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Retour à la liste
                </button>
            </div>
        );
    }

    return (
        <div>
            <GameDetail gameId={gameId} />
            <div className="mt-4">
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Retour à la liste
                </button>
            </div>
        </div>
    );
};

export default GameDetailPage;
