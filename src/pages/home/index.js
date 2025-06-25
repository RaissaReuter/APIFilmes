import { useEffect, useState, useCallback } from "react";
import {
    Container,
    Movie,
    MovieList,
    Btn,
    SearchBarContainer,
    SearchInput,
    SearchButton,
    FilterContainer, // Novo componente de estilo
    GenreSelect // Novo componente de estilo
} from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const KEY = process.env.REACT_APP_KEY;

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [genres, setGenres] = useState([]); // Novo estado para armazenar os gêneros
    const [selectedGenre, setSelectedGenre] = useState(""); // Novo estado para o gênero selecionado

    // Função para buscar a lista de gêneros
    const fetchGenres = useCallback(async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`);
            if (!response.ok) {
                throw new Error(`Erro HTTP ao buscar gêneros: ${response.status}`);
            }
            const data = await response.json();
            setGenres(data.genres); // Salva a lista de gêneros no estado
        } catch (error) {
            console.error("Erro ao buscar gêneros:", error);
            setGenres([]);
        }
    }, [KEY]); // Dependência: KEY

    // Função assíncrona para buscar filmes (popular, por termo de busca ou por gênero)
    const fetchMovies = useCallback(async (query = "", genreId = "") => {
        setIsLoading(true);
        let url = "";

        if (query) {
            // Prioriza a busca por termo se houver um
            url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${encodeURIComponent(query)}`;
        } else if (genreId) {
            // Se não houver termo de busca, mas houver gênero selecionado
            url = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR&sort_by=popularity.desc&with_genres=${genreId}`;
        } else {
            // Caso contrário, lista filmes populares
            url = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
            setMovies([]);
        } finally {
            setIsLoading(false);
        }
    }, [KEY, setMovies, setIsLoading]); // Dependências do useCallback: KEY, setMovies, setIsLoading

    // useEffect para buscar gêneros ao montar o componente
    useEffect(() => {
        fetchGenres();
    }, [fetchGenres]); // Dependência: fetchGenres

    // useEffect para buscar filmes (inicialmente populares ou filtrados)
    useEffect(() => {
        fetchMovies(searchTerm, selectedGenre); // Agora passa searchTerm e selectedGenre
    }, [searchTerm, selectedGenre, fetchMovies]); // Dependências: searchTerm, selectedGenre, fetchMovies

    const handleSearch = () => {
        // Ao buscar, resetamos o gênero selecionado para evitar conflitos
        setSelectedGenre("");
        // fetchMovies já será chamado pelo useEffect devido à mudança em searchTerm
    };

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
        // Ao mudar o gênero, limpamos o termo de busca para focar no filtro
        setSearchTerm("");
        // fetchMovies já será chamado pelo useEffect devido à mudança em selectedGenre
    };

    return (
        <Container>
            <h1>Movies</h1>

            {/* Barra de Busca */}
            <SearchBarContainer>
                <SearchInput
                    type="text"
                    placeholder="Buscar filmes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <SearchButton onClick={handleSearch}>Buscar</SearchButton>
            </SearchBarContainer>

            {/* Novo Filtro por Categoria */}
            <FilterContainer>
                <label htmlFor="genre-select">Filtrar por Categoria:</label>
                <GenreSelect
                    id="genre-select"
                    value={selectedGenre}
                    onChange={handleGenreChange}
                >
                    <option value="">Todas as Categorias</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </GenreSelect>
            </FilterContainer>

            {/* Condições de Renderização: Carregando, Sem resultados, Lista de Filmes */}
            {isLoading ? (
                <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--primary-color)' }}>Carregando filmes...</p>
            ) : movies.length === 0 && (searchTerm || selectedGenre) ? (
                <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--light-gray)'}}>
                    Nenhum filme encontrado para "{searchTerm || genres.find(g => g.id === parseInt(selectedGenre))?.name || 'sua busca' }".
                </p>
            ) : movies.length === 0 && !(searchTerm || selectedGenre) ? (
                 <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'red' }}>Não foi possível carregar filmes populares. Tente novamente mais tarde.</p>
            ) : (
                <MovieList>
                    {movies.map((movie) => {
                        const imageUrl = movie.poster_path ? `${imagePath}${movie.poster_path}` : 'https://via.placeholder.com/180x270?text=Sem+Poster';
                        return (
                            <Movie key={movie.id}>
                                <img
                                    src={imageUrl}
                                    alt={movie.title}
                                />
                                <span>{movie.title}</span>
                                <Link to={`/${movie.id}`}>
                                    <Btn>Detalhes</Btn>
                                </Link>
                            </Movie>
                        );
                    })}
                </MovieList>
            )}
        </Container>
    );
}

export default Home;