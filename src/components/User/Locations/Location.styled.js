import styled from "styled-components"

export const Styled = styled.div` 
     min-height: calc(100vh - 71px);
     .hide-row {
     display: flex;
     justify-content: center;
     @media screen and (min-width: 767.9px){
               display: none;
          }
     }
     .left-panel {
          position: block;
     
         
          @media screen and (max-width: 767.9px){
               position: absolute;
               width: 100vw;
               max-hight: 40vh;
          }
     };

     .right-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          @media screen and (max-width: 767.9px){
               width: 80vw;
               left: 20vw;
               position: relative;

          }
     }
    `;

export const OpenLeftPanel = styled.div`
     margin: 0 auto;
     @media screen and (min-width: 767.9px){
               display: none;
          }
     `;

export const LeftPanel = styled.div`
          margin: 0px;
          max-height: calc(100vh - 71px); 
          display: flex;              
 @media screen and (max-width: 767.9px){
          padding: 4px;
          transition: all .5s ease-out;
          transform: ${({ isOpen }) => isOpen ? 'translateX(0vw)' : 'translateX(-88vw)'};
          z-index: 5;
          background:  #292b2c;
     }
`