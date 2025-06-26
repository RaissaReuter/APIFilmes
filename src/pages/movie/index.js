import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DetailContent, MovieImage, DetailContainer, BackButton, LoadingMessage, ErrorMessage, UnavailableMessage } from "./style";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const KEY = process.env.REACT_APP_KEY;

    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id || !KEY) {
            setIsLoading(false);
            setError("ID do filme ou chave da API não fornecidos.");
            return;
        }

        setIsLoading(true);
        setError(null);

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Filme não encontrado ou erro na API: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setMovie(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Erro ao buscar detalhes do filme:", err);
                setError("Não foi possível carregar os detalhes do filme. Tente novamente.");
                setIsLoading(false);
            });
    }, [id, KEY]);

    if (isLoading) {
        return <LoadingMessage>Carregando detalhes do filme... </LoadingMessage>;
    }

    if (error) {
        return (
            <ErrorMessage>
                Erro: {error} 
                <br />
                <Link to="/">Voltar para a lista de filmes</Link>
            </ErrorMessage>
        );
    }

    if (!movie) {
        return (
            <UnavailableMessage>
                Filme não disponível.
                <br />
                <Link to="/">Voltar para a lista de filmes</Link>
            </UnavailableMessage>
        );
    }

    return (
        <DetailContent> {/* Usando DetailContent como o wrapper principal */}
            <MovieImage
                src={`${imagePath}${movie.poster_path}`}
                alt={movie.title}
            />
            <DetailContainer>
                <h1>{movie.title}</h1>
                <h3>Data de lançamento: {movie.release_date}</h3>
                {movie.vote_average && <p>Avaliação: {movie.vote_average.toFixed(1)} ⭐</p>}

                <div className="descricao">
                    <h4>Descrição: </h4>
                    <p className="movie-desc">{movie.overview}</p>
                </div>
                <Link to="/">
                    <BackButton>Voltar</BackButton>
                </Link>
            </DetailContainer>
        </DetailContent>
    );
};

export default Movie;