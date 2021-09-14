import styled from "styled-components"

export const Styled = styled.div`
     position: absolute;
     top: 0;
     width: 100vw;
     height: 100vh;
     z-index: -1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
    `;

   export const Background = styled.div`
          position: absolute;
          z-index: -1;
          bottom: 0; 
          right: 0; 
          width: 90vh;
          display: flex;          
          @media screen and (max-width: 992px) {
            width: 40vh;
          }
        
    `;