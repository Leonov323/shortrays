import styled from 'styled-components'

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

     .hidde-on-desktop {
       display: none;
     }
     @media screen and (max-width: 1199.9px) {
      .hidde-on-desktop {
       display: block;
     }
     
    `
