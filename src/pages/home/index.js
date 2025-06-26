import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom"; // Importe useLocation
import GenreFilter from "../../components/GenreFilter"; // Importe o novo componente
import {
    Container,
    Movie,
    MovieList,
    Btn,
    HeroBanner, // Novo componente estilizado
    BannerContent, // Novo componente estilizado
    BannerTitle, // Novo componente estilizado
    BannerOverview, // Novo componente estilizado
    BannerButton, // Novo componente estilizado
    LoadingMessage, // Reutilizando de movie/style
    ErrorMessage, // Reutilizando de movie/style
    UnavailableMessage // Reutilizando de movie/style
} from "./style";
// Removidas SearchBarContainer, SearchInput, SearchButton, FilterContainer, GenreSelect pois estão em outros lugares

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const backdropPath = "https://image.tmdb.org/t/p/original"; // Para imagens de banner maiores
    const KEY = process.env.REACT_APP_KEY;

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bannerMovie, setBannerMovie] = useState(null); // Estado para o filme do banner

    const location = useLocation(); // Hook para acessar a URL atual

    // Função para buscar filmes da API
    const fetchMovies = useCallback(async (query = "", genreId = "") => {
        setIsLoading(true);
        setError(null);
        try {
            let url = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR&page=1`;

            if (query) {
                url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${encodeURIComponent(query)}`;
            } else if (genreId) {
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR&with_genres=${genreId}`;
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            setFilteredMovies(data.results);

            // Define o primeiro filme popular como o banner se não houver busca/filtro específico
            if (!query && !genreId && data.results.length > 0) {
                setBannerMovie(data.results[0]);
            } else {
                setBannerMovie(null); // Remove o banner se estiver em uma busca ou filtro específico
            }

        } catch (err) {
            console.error("Erro ao buscar filmes:", err);
            setError("Não foi possível carregar os filmes. Tente novamente mais tarde.");
        } finally {
            setIsLoading(false);
        }
    }, [KEY]);

    // Efeito para carregar filmes com base na URL
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchQuery = queryParams.get('q') || ''; // Pega 'q' da URL
        const genreId = location.pathname.startsWith('/genre/') ? location.pathname.split('/')[2] : ''; // Pega o ID do gênero da URL

        fetchMovies(searchQuery, genreId);
    }, [location.search, location.pathname, fetchMovies]); // Roda quando a URL muda

    return (
        <> {/* Fragmento para o HeroBanner e o Container principal */}
            {bannerMovie && ( // Renderiza o banner apenas se houver um filme
                <HeroBanner style={{ backgroundImage: `linear-gradient(to top, var(--background-color), rgba(0,0,0,0.5)), url(${backdropPath}${bannerMovie.backdrop_path})` }}>
                    <BannerContent>
                        <BannerTitle>{bannerMovie.title}</BannerTitle>
                        <BannerOverview>{bannerMovie.overview || "Descrição não disponível."}</BannerOverview>
                        <Link to={`/${bannerMovie.id}`}>
                            <BannerButton>Ver Detalhes</BannerButton>
                        </Link>
                    </BannerContent>
                </HeroBanner>
            )}

            <GenreFilter /> {/* Adiciona o filtro de gênero aqui */}

            <Container>
                {/* Mensagens de estado */}
                {isLoading && <LoadingMessage>Carregando filmes...</LoadingMessage>}
                {error && <ErrorMessage>{error}</ErrorMessage>}

                {!isLoading && !error && filteredMovies.length === 0 && (
                    <UnavailableMessage>Nenhum filme encontrado. Tente outra busca ou filtro.</UnavailableMessage>
                )}

                {!isLoading && !error && filteredMovies.length > 0 && (
                    <MovieList>
                        {filteredMovies.map((movie) => (
                            <Movie key={movie.id}>
                                <Link to={`/${movie.id}`}>
                                    <img
                                        src={`${imagePath}${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                </Link>
                                <span>{movie.title}</span>
                                <Link to={`/${movie.id}`}>
                                    <Btn>Detalhes</Btn>
                                </Link>
                            </Movie>
                        ))}
                    </MovieList>
                )}
            </Container>
        </>
    );
}

export default Home;