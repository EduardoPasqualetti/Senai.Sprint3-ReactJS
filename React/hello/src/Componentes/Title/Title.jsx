import React from 'react';
import './Title.css'


const Title = ( {nome, sobrenome}) => {

    return(
        <h1 className='title'>Hello {nome} {sobrenome}</h1>
    );
}

export default Title;

