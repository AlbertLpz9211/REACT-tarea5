import React from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {
    const userName = useSelector(state => state.userName)
    return (
        <div>
            <h1>POKEDEX</h1>
            <p>welcome {userName}</p>
        </div>
    );
};

export default Pokedex;