import { useEffect, useState, useCallback } from "react"; // <--- Adicionamos useCallback aqui
import { Container, Movie, MovieList, Btn, SearchBarContainer, SearchInput, SearchButton } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const KEY = process.env.REACT_APP_KEY;

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Envolvemos fetchMovies com useCallback
    const fetchMovies = useCallback(async (query = "") => { // <--- Início do useCallback
        setIsLoading(true);
        let url = "";
        if (query) {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${encodeURIComponent(query)}`;
        } else {
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
    }, [KEY, setMovies, setIsLoading]); // <--- Dependências do useCallback: KEY e os setters de estado

    useEffect(() => {
        fetchMovies();
    }, [KEY, fetchMovies]); // Dependências do useEffect: KEY e a função memoizada fetchMovies

    const handleSearch = () => {
        fetchMovies(searchTerm);
    };

    return (
        <Container>
            <h1>Movies</h1>
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

            {isLoading ? (
                <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--primary-color)' }}>Carregando filmes...</p>
            ) : movies.length === 0 && searchTerm ? (
                <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'var(--light-gray)' }}>Nenhum filme encontrado para "{searchTerm}".</p>
            ) : movies.length === 0 && !searchTerm ? (
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