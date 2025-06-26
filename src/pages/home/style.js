import styled from "styled-components";

export const HeroBanner = styled.div`
    width: 100%;
    height: 550px; /* Altura do banner */
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end; /* Conteúdo na parte de baixo do banner */
    color: var(--text-color);
    position: relative;
    padding: 0 4rem 3rem; /* Padding para o conteúdo */
    box-shadow: inset 0 -80px 100px rgba(0,0,0,0.9); /* Sombra na parte de baixo do banner */

    @media (max-width: 992px) {
        height: 450px;
        padding: 0 2rem 2rem;
        box-shadow: inset 0 -60px 80px rgba(0,0,0,0.9);
    }

    @media (max-width: 768px) {
        height: 350px;
        padding: 0 1.5rem 1.5rem;
        text-align: center;
        align-items: center; /* Centraliza conteúdo em mobile */
        justify-content: center;
        box-shadow: inset 0 -50px 70px rgba(0,0,0,0.9);
    }
`;

export const BannerContent = styled.div`
    max-width: 600px; /* Largura máxima do texto no banner */
    background-color: rgba(0, 0, 0, 0.4); /* Fundo semi-transparente para o texto */
    padding: 1.5rem;
    border-radius: 10px;
    backdrop-filter: blur(5px); /* Efeito de blur no fundo do conteúdo */

    @media (max-width: 768px) {
        max-width: 90%;
        padding: 1rem;
    }
`;

export const BannerTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: var(--primary-color);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const BannerOverview = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limita o texto a 3 linhas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);

    @media (max-width: 768px) {
        font-size: 0.9rem;
        -webkit-line-clamp: 4;
    }
`;

export const BannerButton = styled.button`
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 8px;
    background-color: var(--primary-color);
    color: var(--text-color);
    font-weight: 600;
    font-size: 1.05rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

    &:hover {
        background-color: var(--hover-effect-color);
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.6);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
`;

export const Container = styled.div`
    padding: 2.5rem 2rem;
    max-width: 1300px;
    margin: 2rem auto;
    background-color: var(--background-color);
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);

    @media (max-width: 992px) { /* Em telas menores, o GenreFilter não é fixo, ajusta o margin-top */
        margin-top: 4rem; /* Mais espaço para o filtro se ele ficar em cima */
    }
`;

// Removidas SearchBarContainer, SearchInput, SearchButton, FilterContainer, GenreSelect
// pois agora estão no Header ou no GenreFilter componente.

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;
    padding-bottom: 3rem;
    justify-content: center;

    @media (min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 1199px) and (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 991px) and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1.5rem;
        row-gap: 2.5rem;
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease;
    border: 2px solid transparent;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
        border-color: var(--primary-color);
    }

    img {
        width: 100%;
        height: 280px;
        border-radius: 8px;
        object-fit: cover;
        margin-bottom: 0.8rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    span {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        color: var(--text-color);
        margin-bottom: 0.8rem;
        height: 2.5em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    a {
        text-decoration: none;
        color: inherit;
        display: block;
    }
`;

export const Btn = styled.button`
    margin-top: auto;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 6px;
    color: var(--text-color);
    background-color: var(--primary-color);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
        background-color: var(--hover-effect-color);
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }
`;

// Reutilizando LoadingMessage, ErrorMessage, UnavailableMessage de movie/style
// Você pode criar um arquivo separado para utilities/messages ou mantê-los aqui
export const LoadingMessage = styled.div`
    text-align: center;
    margin-top: 100px; /* Mais espaço para o centro */
    font-size: 1.8rem;
    color: var(--primary-color);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`;

export const ErrorMessage = styled.div`
    text-align: center;
    margin-top: 100px;
    font-size: 1.8rem;
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
    font-size: 1.8rem;
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