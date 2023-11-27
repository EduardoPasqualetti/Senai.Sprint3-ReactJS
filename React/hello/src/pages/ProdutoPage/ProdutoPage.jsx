import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProdutoPage = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <h1>Pagina de Produto</h1>
            <span>{theme}</span>
        </div>
    );
};

export default ProdutoPage;