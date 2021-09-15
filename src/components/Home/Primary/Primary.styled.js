import styled from "styled-components"

export const Styled = styled.div`
     width: 100vw;
     z-index: -1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     .hidde-on-primary {
       display: none;
     }

     @media screen and (max-width: 1199.9px) {
      
      .hidde-on-primary {
       display: block;
     }
          }
     
    `;

   export const Background = styled.div`
          position: absolute;
          z-index: -1;
          bottom: 0; 
          right: 0; 
          width: 90vh;
          display: flex;          
          @media screen and (max-width: 1199.9px) {
            display: none;
          }
        
    `;