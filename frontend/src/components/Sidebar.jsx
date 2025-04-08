import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 h-full p-4">
            <nav className="space-y-4">
                <Link to="/" className="block hover:underline">Liste des jeux</Link>
                <Link to="/ajouter" className="block hover:underline">Ajouter un jeu</Link>
                <Link to="/stats" className="block hover:underline">Statistiques</Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
