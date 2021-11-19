import styled from 'styled-components'
export const MapStyled = styled.div`
   image-rendering: pixelated;
   background-image: url("./map.webp");
   background-size: 100%;
   width: 832px;
   height: 640px;
   position: relative;
   transform: translate3d(${({x}) => -x + 264 }px, ${({y}) => -y + 160  }px, 0 );
`;