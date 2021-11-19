import styled, { css } from 'styled-components'

function getCharacterDirection(direction = 'ArrowDown') {
   switch (direction) {
      case 'ArrowUp':
         return css`background-position-y: -256px;`
      case 'ArrowLeft':
         return css`background-position-y: -384px;`
      case 'ArrowRight':
         return css`background-position-y: -128px;`
   }
}
export const CharacterStyled = styled.div`
   width: 128px;
   height: 128px;
   position: absolute;
   overflow:hidden;
   transform: translate3d( ${({ x }) => x}px, ${({ y }) => y}px, 0);
   
`;
export const SpriteSheet = styled.div`
   image-rendering: pixelated;
   position: absolute;
   background: url("./emy.png") no-repeat no-repeat;
   background-size: 100%;
   width: 512px;
   height: 512px;
   ${({ direction }) => getCharacterDirection(direction)}
   animation: ${({ active }) => active ?  'walkAnimation 0.6s steps(4) infinite' : ''};
   

   @keyframes walkAnimation {
  from {
    transform: translate3d(0%,0%,0);
  }
  to {
    transform: translate3d(-100%,0%,0);
  }
}
   `
export const Shadow = styled.div`
    width: 128px;
   height: 128px;
   position: absolute;
   left:0;
   top:0;
   background: url("https://assets.codepen.io/21542/DemoRpgCharacterShadow.png") no-repeat no-repeat;
   background-size: 100%;
   
   `