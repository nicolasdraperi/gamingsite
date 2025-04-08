import React, {useEffect, useState} from 'react';
import {PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import CountUp from 'react-countup';
import TrophySilver from '../components/icons/TrophySilver';
import TrophyGold from "../components/icons/TrophyGold";
import TrophyBronze from "../components/icons/TrophyBronze";


const StatsPage = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5050/api/games')
            .then(res => res.json())
            .then(data => {
                setGames(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors du chargement des jeux :', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Chargement des statistiques...</p>;

    // 🎮 Calculs
    const totalGames = games.length;
    const totalHours = games.reduce((sum, game) => sum + game.hoursPlayed, 0);
    const finishedCount = games.filter(g => g.finished).length;
    const notFinishedCount = totalGames - finishedCount;

    // 🧀 Données pour camembert des jeux finis
    const finishedData = [
        {name: 'Terminés', value: finishedCount},
        {name: 'Non terminés', value: notFinishedCount}
    ];

    // 📌 Données pour camembert des tags
    const tagCount = {};
    games.forEach(game => {
        game.tags.forEach(tag => {
            tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
    });
    const tagData = Object.entries(tagCount).map(([tag, count]) => ({
        name: tag,
        value: count
    }));

    const COLORS = ['#00C49F', '#FF8042', '#FFBB28', '#0088FE', '#FF6384', '#AA66CC', '#33B5E5', '#FF4444'];

    return (
        <div className="max-w-6xl mx-auto bg-neutral-100/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">📊 Statistiques</h2>

            {/* 🎯 GRAPHIQUES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Progression</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={finishedData} dataKey="value" outerRadius={80} label>
                                {finishedData.map((entry, index) => (
                                    <Cell key={`cell-finished-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip/>
                            <Legend/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Répartition par tags</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={tagData} dataKey="value" outerRadius={80} label>
                                {tagData.map((entry, index) => (
                                    <Cell key={`cell-tag-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip/>
                            <Legend/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* 🧮 COMPTEURS */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 text-center gap-4">
                <p className="text-xl font-semibold">
                    ⏱️ Heures jouées cumulées : <CountUp end={totalHours} duration={30} suffix="h"/>
                </p>
                <p className="text-xl font-semibold">
                    🎮 Nombre total de jeux : <CountUp end={totalGames} duration={2}/>
                </p>
            </div>

            {/* 👑 Podium des 3 jeux favoris */}
            <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">🏆 Top 3 des jeux favoris</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {[...games]
                        .sort((a, b) => b.note - a.note)
                        .slice(0, 3)
                        .map((game, index) => (
                            <div key={game._id} className="bg-white shadow-md rounded-lg p-4">
                                <div className="mb-2 flex justify-center">
                                    {index === 0 && <TrophyGold />}
                                    {index === 1 && <TrophySilver />}
                                    {index === 2 && <TrophyBronze />}
                                </div>

                                <h4 className="text-lg font-bold">{game.name}</h4>
                                <p className="text-sm text-gray-600">Note : {game.note}/10</p>
                            </div>
                        ))}
                </div>
            </div>

            {/* 📅 Frise chronologique */}
            <div className="mt-16">
                <h3 className="text-xl font-semibold mb-6 text-center">📅 Derniers jeux ajoutés</h3>
                <div className="relative flex items-start justify-between px-4">
                    {/* Ligne horizontale */}
                    <div className="absolute top-5 left-0 right-0 h-0.5 bg-purple-400 z-0"></div>

                    {[...games]
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .slice(0, 5)
                        .reverse()
                        .map((game, index) => (
                            <div key={game._id} className="text-center w-40 z-10">
                                {/* Point violet */}
                                <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-2 border-2 border-white"></div>
                                <p className="font-semibold text-sm">{game.name}</p>
                                <p className="text-xs text-black-500">
                                    {game.createdAt
                                        ? new Date(game.createdAt).toLocaleDateString('fr-FR')
                                        : 'Date inconnue'}
                                </p>
                            </div>
                        ))}
                </div>
            </div>



        </div>
    );

};

export default StatsPage;
