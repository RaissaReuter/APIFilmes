import styled from 'styled-components';

export const FilterContainer = styled.div`
    position: fixed; 
    top: 100px; /* Abaixo do header */
    right: 2.5rem; /* Canto direito */
    z-index: 900; 
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Alinha o conteúdo à direita */
    gap: 0.5rem; /* Espaçamento entre ícone e select */

    @media (max-width: 992px) { /* Em telas menores, pode ir para o topo do conteúdo */
        position: static; 
        margin: 2rem auto 0; 
        align-items: center;
        width: 100%;
        padding: 0 1.5rem;
    }
`;

export const FilterIcon = styled.div`
    color: var(--primary-color);
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 0.5rem;

    @media (max-width: 992px) {
        display: none; 
    }
`;

export const GenreSelect = styled.select`
    padding: 0.6rem 1.2rem;
    border: 1px solid var(--primary-color); 
    border-radius: 8px;
    font-size: 0.95rem;
    background-color: var(--secondary-color);
    color: var(--text-color);
    outline: none;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%238B5CF6' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.8rem center;
    background-size: 1em;
    padding-right: 2.2rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);


    &:hover {
        border-color: var(--hover-effect-color);
        box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.2);
    }

    option {
        background-color: var(--secondary-color);
        color: var(--text-color);
    }

    @media (max-width: 992px) {
        width: 90%;
        max-width: 300px;
    }
`;