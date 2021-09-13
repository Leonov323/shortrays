import styled from "styled-components"

export const Styled = styled.div`
     position: absolute;
     top: 0;
     width: 100vw;
     height: 100vh;
     z-index: -1;
    `;

   export const Background = styled.div`
          position: absolute;
          z-index: -1;
          bottom: 0; 
          right: 0; 
          width: 50%;
          height: 70%;
          display: flex;          
          @media screen and (max-width: 993px) {
            display: none;
          }
        
    `;