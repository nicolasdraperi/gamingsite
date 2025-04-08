import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GameList from './components/GameList';
import GameDetailPage from './pages/GameDetailPage';
import GameForm from "./components/GameForm";
import StatsPage from "./pages/StatsPage";
import BackgroundBubbles from './components/BackgroundBubbles'; // ✅ Ajout du background
import './output.css';

function App() {
    return (
        <Router>
            <div className="relative">
                <BackgroundBubbles /> {/* 🎨 Fond animé en arrière-plan */}

                <div className="h-screen flex flex-col relative z-10">
                    <Header />
                    <div className="flex flex-1">
                        <Sidebar />
                        <main className="flex-1 p-6 overflow-y-auto">
                            <Routes>
                                <Route path="/" element={<GameList />} />
                                <Route path="/details" element={<GameDetailPage />} />
                                <Route path="/ajouter" element={<GameForm />} />
                                <Route path="/stats" element={<StatsPage />} />
                            </Routes>
                        </main>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
