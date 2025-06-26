import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Movie from './pages/movie';
import Header from './components/Header';

function App() {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                {}
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Home />} /> {/* Rota para resultados de busca */}
                <Route path="/genre/:id" element={<Home />} /> {/* Rota para filtro por gênero */}
                <Route path="/:id" element={<Movie />} /> {/* Rota para detalhes do filme */}
            </Routes>
        </React.Fragment>
    );
}

export default App;