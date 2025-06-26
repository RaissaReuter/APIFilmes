import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Para navegar e ler a URL
import { FilterContainer, GenreSelect, FilterIcon } from './style'; // Importe os componentes estilizados
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importe FontAwesome
import { faFilter } from '@fortawesome/free-solid-svg-icons'; // Ícone de filtro

function GenreFilter() {
    const KEY = process.env.REACT_APP_KEY;
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const navigate = useNavigate();
    const location = useLocation(); // Hook para acessar a URL atual

    // Função para buscar gêneros
    const fetchGenres = useCallback(async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            setGenres(data.genres);
        } catch (err) {
            console.error("Erro ao buscar gêneros:", err);
        }
    }, [KEY]);

    useEffect(() => {
        fetchGenres();
        // Ao montar, verifica se já existe um genreId na URL
        const genreFromUrl = location.pathname.startsWith('/genre/') ? location.pathname.split('/')[2] : '';
        if (genreFromUrl) {
             setSelectedGenre(genreFromUrl);
        } else {
            setSelectedGenre(""); // Reseta se não houver gênero na URL
        }

    }, [fetchGenres, location.pathname, location.search]); 

    const handleGenreChange = (event) => {
        const genreId = event.target.value;
        setSelectedGenre(genreId);
        if (genreId) {
            navigate(`/genre/${genreId}`); // Navega para a rota de gênero
        } else {
            navigate("/"); // Volta para a Home se "Todos os Gêneros" for selecionado
        }
    };

    return (
        <FilterContainer>
            <FilterIcon>
                <FontAwesomeIcon icon={faFilter} />
            </FilterIcon>
            <GenreSelect onChange={handleGenreChange} value={selectedGenre}>
                <option value="">Todos os Gêneros</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </GenreSelect>
        </FilterContainer>
    );
}

export default GenreFilter;