import React, { useContext } from 'react';
import { MovementContext } from '../../contexts/MovementContext';
import { MapStyled } from './map.styled';

function Map({ children }) {
    const { X, Y } = useContext(MovementContext)

    return (
        <MapStyled gridCell={4*16} x={X} y={Y}>
            {children}
        </MapStyled>);
}

export default Map;