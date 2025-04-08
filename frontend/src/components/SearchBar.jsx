import React from 'react';

const SearchBar = ({ search, setSearch, showFinishedOnly, setShowFinishedOnly }) => {
    return (
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center">
            <input
                type="text"
                placeholder="Rechercher par nom ou tag..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/90 border border-gray-300 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />


            <label className="ml-4 text-sm font-medium flex items-center gap-2 bg-black/30 px-2 py-1 rounded-lg bg-white">
                <input
                    type="checkbox"
                    checked={showFinishedOnly}
                    onChange={e => setShowFinishedOnly(e.target.checked)}
                    className="w-5 h-5 rounded border border-gray-400 bg-white text-purple-600"
                />
                Jeux terminés seulement
            </label>

        </div>
    );
};

export default SearchBar;
