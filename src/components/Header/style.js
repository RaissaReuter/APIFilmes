import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: var(--secondary-color);
    padding: 1.2rem 3rem;
    display: flex;
    justify-content: space-between; /* Espaço entre logo, busca e nav */
    align-items: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    position: sticky;
    top: 0;
    z-index: 1000;

    @media (max-width: 992px) {
        flex-direction: column;
        padding: 1rem 1.5rem;
        gap: 1rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--primary-color);
    cursor: pointer;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

    svg {
        height: 35px;
        width: auto;
        margin-right: 5px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 768px) {
        font-size: 2.2rem;
        svg {
            height: 30px;
        }
    }
`;

export const SearchForm = styled.form` 
    display: flex;
    gap: 0.8rem; 
    align-items: center;

    @media (max-width: 992px) {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap; 
    }
`;

export const SearchInput = styled.input` 
    padding: 0.7rem 1.2rem;
    border: 1px solid var(--light-gray);
    border-radius: 6px; /* Mais compacto */
    font-size: 0.95rem;
    width: 250px; 
    background-color: var(--background-color); 
    color: var(--text-color);
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.3);
    }

    &::placeholder {
        color: var(--light-gray);
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        width: 80%;
        max-width: 250px;
    }
`;

export const SearchButton = styled.button` 
    padding: 0.7rem 1.2rem;
    border: none;
    border-radius: 6px;
    background-color: var(--primary-color);
    color: var(--text-color);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    &:hover {
        background-color: var(--hover-effect-color);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;

    @media (max-width: 992px) { /* Esconde a navegação padrão em telas menores */
        display: none; /* Ou pode ser transformado em um menu hambúrguer */
    }
`;

export const NavItem = styled.li`
    a {
        color: var(--light-gray);
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.05rem;
        transition: color 0.3s ease, transform 0.2s ease;
        padding: 0.5rem 0.8rem;
        border-radius: 5px;

        &:hover {
            color: var(--primary-color);
            transform: translateY(-2px);
        }
    }
`;