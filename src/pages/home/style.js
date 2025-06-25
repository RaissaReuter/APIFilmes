import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    max-width: 1200px; /* Limite a largura para melhor leitura */
    margin: 0 auto; /* Centraliza o container */

    h1 {
        text-align: center;
        margin: 4rem 0 3rem; /* Ajusta a margem para dar espaço à barra de busca */
        color: var(--primary-color); /* Usando variável global - Roxo */
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
            margin: 2rem 0;
        }
    }
`;

// --- Novos estilos para a barra de busca ---
export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    gap: 1rem; /* Espaçamento entre o input e o botão */

    @media (max-width: 600px) {
        flex-direction: column; /* Em telas menores, input e botão empilham */
        gap: 0.8rem;
    }
`;

export const SearchInput = styled.input`
    padding: 0.8rem 1.5rem;
    border: 2px solid var(--primary-color); /* Borda roxa */
    border-radius: 25px;
    font-size: 1rem;
    width: 300px;
    background-color: var(--secondary-color); /* Fundo preto/cinza escuro */
    color: var(--text-color); /* Texto branco */
    outline: none; /* Remove a borda de foco padrão */
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #A059FF; /* Um roxo um pouco mais claro ao focar */
        box-shadow: 0 0 0 3px rgba(123, 0, 255, 0.3); /* Sombra roxa no foco */
    }

    &::placeholder {
        color: var(--light-gray); /* Placeholder cinza claro */
    }

    @media (max-width: 768px) {
        width: 80%; /* Ocupa mais espaço em telas menores */
        max-width: 300px;
    }
`;

export const SearchButton = styled.button`
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 25px;
    background-color: var(--primary-color); /* Roxo vibrante */
    color: var(--dark-gray); /* Texto preto/cinza muito escuro */
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #A059FF; /* Um roxo um pouco mais claro no hover */
        transform: translateY(-2px);
    }
`;
// --- Fim dos novos estilos de busca ---


export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem; /* Ajustado */
    row-gap: 3rem;   /* Ajustado */

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
    background-color: var(--secondary-color); /* Cor de fundo para o cartão - Preto/Cinza Escuro */
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Sombra para profundidade */
    padding: 1.5rem; /* Espaçamento interno */
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Transições suaves */

    &:hover {
        transform: scale(1.05); /* Efeito de zoom no hover para todo o cartão */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
    }

    img {
        width: 100%; /* Imagem ocupa 100% da largura do cartão */
        max-width: 180px; /* Mantém o tamanho máximo da imagem */
        height: auto;
        border-radius: 0.8rem; /* Arredondamento da imagem */
        margin-bottom: 1.5rem;
        object-fit: cover; /* Garante que a imagem cubra a área sem distorcer */
    }

    span {
        font-weight: bold;
        font-size: 1.2rem; /* Tamanho da fonte mais consistente */
        margin-bottom: 1rem; /* Espaçamento abaixo do título */
        color: var(--primary-color); /* Título do filme roxo */
        height: 3em; /* Limita a altura para 2 linhas, evitando que cards fiquem desalinhados por títulos longos */
        overflow: hidden; /* Esconde o texto que excede a altura */
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Limita a 2 linhas */
        -webkit-box-orient: vertical;
    }

    a {
        text-decoration: none; /* Garante que o link não tenha sublinhado */
        color: inherit; /* Herda a cor do texto */
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: var(--dark-gray); /* Texto preto/cinza muito escuro */
    background-color: var(--primary-color); /* Roxo vibrante */
    font-weight: 1000;
    font-size: 12px;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: #A059FF; /* Roxo um pouco mais claro no hover */
        transform: scale(1.08); /* Apenas o botão escala um pouco */
    }
`;
