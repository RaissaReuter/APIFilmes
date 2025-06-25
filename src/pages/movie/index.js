import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css"; // Seus estilos para esta página

const Movie = () => {
    const { id } = useParams(); // Pega o ID do filme da URL (ex: "12345")
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const KEY = process.env.REACT_APP_KEY; // Sua chave da API do .env

    const [movie, setMovie] = useState(null); // Estado para guardar os detalhes do filme (inicialmente nulo)
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para controlar erros

    useEffect(() => {
        // Garante que só faz a requisição se tiver um ID e a KEY
        if (!id || !KEY) {
            setIsLoading(false);
            setError("ID do filme ou chave da API não fornecidos.");
            return;
        }

        setIsLoading(true); // Começa a carregar
        setError(null); // Limpa qualquer erro anterior

        // Faz a requisição diretamente para os detalhes do filme com o ID
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
            .then((response) => {
                if (!response.ok) { // Se a resposta não for OK (ex: 404 Not Found)
                    throw new Error(`Filme não encontrado ou erro na API: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setMovie(data); // 'data' agora é o objeto do filme específico
                setIsLoading(false); // Termina o carregamento com sucesso
            })
            .catch((err) => {
                console.error("Erro ao buscar detalhes do filme:", err);
                setError("Não foi possível carregar os detalhes do filme. Tente novamente."); // Define a mensagem de erro
                setIsLoading(false); // Termina o carregamento com erro
            });
    }, [id, KEY]); // O useEffect será re-executado se 'id' ou 'KEY' mudarem

    // --- Lógica para exibir estados de carregamento e erro na UI ---
    if (isLoading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.5rem', color: 'var(--primary-color)' }}>
                Carregando detalhes do filme... 🍿
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.5rem', color: 'red' }}>
                Erro: {error} 🙁
                <br />
                <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>Voltar para a lista de filmes</Link>
            </div>
        );
    }

    // Se o filme ainda for null (mesmo sem erro ou carregando), algo deu errado com a API (ex: filme não existe)
    if (!movie) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '1.5rem' }}>
                Filme não disponível. 🤔
                <br />
                <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>Voltar para a lista de filmes</Link>
            </div>
        );
    }

    // --- Renderização dos detalhes do filme (se tudo estiver OK) ---
    return (
        <div>
            <nav>
                <h1>{movie.title}</h1>
            </nav>

            <div className="movie-detail-content">
                <img
                    className="img_movie"
                    src={`${imagePath}${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="container">
                    <h1>{movie.title}</h1>
                    <h3>Data de lançamento: {movie.release_date}</h3>
                    {movie.vote_average && <p>Avaliação: {movie.vote_average.toFixed(1)} ⭐</p>}

                    <div className="descricao">
                        <h4>Descrição: </h4>
                        <p className="movie-desc">{movie.overview}</p>
                    </div>
                    <Link to="/">
                        <button className="link_button">Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;