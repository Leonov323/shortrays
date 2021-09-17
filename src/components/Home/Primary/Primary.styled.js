import styled from "styled-components"

export const Styled = styled.div`
     width: 100vw;
     z-index: -1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     min-height: calc(100vh - 72px);

    .min {
      min-height: calc(100vh - 72px)
     };

     .hidde-on-primary {
       display: none;
     }

     @media screen and (max-width: 1199.9px) {
      .hidde-on-primary {
       display: block;
     }
     
    `;

export const Background = styled.div`
          position: absolute;
          z-index: -2;
          bottom: 0; 
          right: 0; 
          width: 90vh;
          display: flex;          
          @media screen and (max-width: 1199.9px) {
            display: none;
          }
        
    `;

export const Chevrons = styled.div`
    display: block;
    position: absolute;
    bottom: 25px;
    left: 50;
    z-index: 1;
    @media screen and (min-width: 1199.9px) {
       display: none;
    }
    `