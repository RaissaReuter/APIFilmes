import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        text-align: center;
        margin: 4rem 0 3rem;
        color: var(--primary-color);
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
            margin: 2rem 0;
        }
    }
`;

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem; /* Reduz a margem para dar espaço ao filtro */
    gap: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 0.8rem;
    }
`;

export const SearchInput = styled.input`
    padding: 0.8rem 1.5rem;
    border: 2px solid var(--primary-color);
    border-radius: 25px;
    font-size: 1rem;
    width: 300px;
    background-color: var(--secondary-color);
    color: var(--text-color);
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #A059FF;
        box-shadow: 0 0 0 3px rgba(123, 0, 255, 0.3);
    }

    &::placeholder {
        color: var(--light-gray);
    }

    @media (max-width: 768px) {
        width: 80%;
        max-width: 300px;
    }
`;

export const SearchButton = styled.button`
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 25px;
    background-color: var(--primary-color);
    color: var(--dark-gray);
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #A059FF;
        transform: translateY(-2px);
    }
`;

// --- Novos estilos para o filtro de categoria ---
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column; /* Coloca label e select um em cima do outro em telas menores */
    align-items: center;
    margin-bottom: 3rem; /* Espaço abaixo do filtro */
    gap: 0.8rem;

    label {
        color: var(--light-gray);
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 768px) {
        flex-direction: row; /* Em telas maiores, coloca lado a lado */
        justify-content: center;
        gap: 1rem;
        label {
            margin-bottom: 0;
        }
    }
`;

export const GenreSelect = styled.select`
    padding: 0.8rem 1.5rem;
    border: 2px solid var(--primary-color);
    border-radius: 25px;
    font-size: 1rem;
    background-color: var(--secondary-color);
    color: var(--text-color);
    outline: none;
    cursor: pointer;
    appearance: none; /* Remove a seta padrão do select em alguns navegadores */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%237B00FF' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E"); /* Seta personalizada */
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.2em;
    padding-right: 2.5rem; /* Aumenta o padding para a seta não sobrepor o texto */

    &:hover {
        border-color: #A059FF;
    }

    option {
        background-color: var(--secondary-color);
        color: var(--text-color);
    }

    @media (max-width: 768px) {
        width: 80%;
        max-width: 300px;
    }
`;
// --- Fim dos novos estilos de filtro ---


export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        column-gap: 1.5rem;
        row-gap: 2rem;
    }
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    padding: 1.5rem;
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
    }

    img {
        width: 100%;
        max-width: 180px;
        height: auto;
        border-radius: 0.8rem;
        margin-bottom: 1.5rem;
        object-fit: cover;
    }

    span {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: var(--primary-color);
        height: 3em;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: var(--dark-gray);
    background-color: var(--primary-color);
    font-weight: 1000;
    font-size: 12px;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: #A059FF;
        transform: scale(1.08);
    }
`;
