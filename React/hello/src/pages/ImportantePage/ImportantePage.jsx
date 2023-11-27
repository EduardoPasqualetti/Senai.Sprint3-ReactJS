import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const ImportantePage = () => {

    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <h1>Dados importantes</h1>
            <h2>Pagina Privada</h2>
            <span>{theme}</span>
        </div>
    );
};

export default ImportantePage;