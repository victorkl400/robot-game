import React from 'react';
import { CameraStyled } from './camera.styled';

function Camera({children}) {
    return (
        <CameraStyled>
            {children}
        </CameraStyled>);
}

export default Camera;