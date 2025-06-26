import styled from "styled-components";

// O MovieContainer global com nav não é mais necessário aqui se o Header for global.
// O nav e h1 dentro dele foram removidos de index.js, então podemos simplificar.
// Vamos focar no conteúdo principal da página de detalhes.

export const DetailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    max-width: 1000px; /* Mantém um bom tamanho para desktop */
    margin: 3rem auto;
    gap: 2.5rem; /* Espaçamento entre imagem e texto */
    background-color: var(--secondary-color); /* Fundo de card para a seção de detalhes */
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 3.5rem;
    }

    @media (max-width: 768px) {
        padding: 2rem;
        margin: 2rem auto;
        gap: 2rem;
    }
`;

export const MovieImage = styled.img`
    width: 100%;
    max-width: 350px; /* Imagem do pôster na página de detalhes */
    height: auto;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
    display: block;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.01);
    }

    @media (min-width: 768px) {
        margin-right: 0;
        margin-bottom: 0;
    }
`;

export const DetailContainer = styled.div`
    text-align: left;
    flex-grow: 1;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 3rem; /* Título do filme na página de detalhes */
        margin-bottom: 1rem;
        color: var(--text-color); /* Título em branco/cinza claro */
        text-shadow: none; /* Remover sombra para um look mais clean aqui */

        @media (max-width: 768px) {
            font-size: 2.2rem;
            text-align: center;
        }
    }

    h3 {
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
        color: var(--light-gray);
        font-weight: 400;
    }

    p {
        font-size: 1.05rem;
        margin-bottom: 1rem;
        color: var(--text-color);
        font-weight: 300;
    }

    .descricao {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 1.5rem;

        h4 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
            font-weight: 600;
        }

        .movie-desc {
            text-align: justify;
            line-height: 1.7;
            font-size: 1rem;
            color: var(--text-color);
            font-weight: 300;
        }
    }

    a {
        text-decoration: none;
        display: inline-block;
    }
`;

export const BackButton = styled.button`
    margin-top: 2rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 8px; /* Cantos arredondados */
    color: var(--text-color);
    background-color: var(--primary-color); /* Roxo para o botão */
    font-weight: 600;
    font-size: 1.05rem;
    cursor: pointer;
    transition: all 250ms ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

    &:hover {
        background-color: var(--hover-effect-color);
        transform: scale(1.03);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
    }

    &:active {
        transform: scale(1);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
`;

export const LoadingMessage = styled.div`
    text-align: center;
    margin-top: 100px;
    font-size: 1.6rem;
    color: var(--primary-color);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`;

export const ErrorMessage = styled.div`
    text-align: center;
    margin-top: 100px;
    font-size: 1.6rem;
    color: red;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    a {
        color: var(--primary-color);
        text-decoration: underline;
        margin-top: 1rem;
        display: block;
    }
`;

export const UnavailableMessage = styled.div`
    text-align: center;
    margin-top: 100px;
    font-size: 1.6rem;
    color: var(--light-gray);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    a {
        color: var(--primary-color);
        text-decoration: underline;
        margin-top: 1rem;
        display: block;
    }
`;