import React, { useContext } from 'react';
import { MovementContext } from '../../contexts/MovementContext';
import { CharacterStyled, Shadow, SpriteSheet } from './character.styled';

function Character({ children }) {
    const { active, direction, X, Y } = useContext(MovementContext)
    return (
        <CharacterStyled x={X} y={Y}>
            <Shadow/>
            <SpriteSheet direction={direction} active={active}/>
            {children}
        </CharacterStyled>);
}

export default Character;