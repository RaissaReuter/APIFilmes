// src/components/Header/index.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate
import { HeaderContainer, Logo, NavList, NavItem, SearchForm, SearchInput, SearchButton } from './style'; // Importe os novos componentes estilizados

const NMoviesLogo = () => (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="30" fill="transparent"/>
        <text x="0" y="24" font-family="Poppins, sans-serif" font-weight="700" font-size="28" fill="var(--primary-color)">
            N
        </text>
        <text x="25" y="22" font-family="Poppins, sans-serif" font-weight="600" font-size="20" fill="var(--text-color)">
            MOVIES
        </text>
    </svg>
);

function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate(); // Hook para navegação programática

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`); // Navega para a rota de busca com o parâmetro
            setSearchQuery(""); // Limpa o campo após a busca
        }
    };

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo>
                    <NMoviesLogo />
                </Logo>
            </Link>
            <SearchForm onSubmit={handleSearchSubmit}> {/* Formulário de busca */}
                <SearchInput
                    type="text"
                    placeholder="Buscar filmes..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <SearchButton type="submit">Buscar</SearchButton>
            </SearchForm>
            <NavList>
                <NavItem>
                    <Link to="/">Início</Link>
                </NavItem>
                {/* Outros itens de navegação se houver */}
            </NavList>
        </HeaderContainer>
    );
}

export default Header;