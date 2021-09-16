import styled from "styled-components"

export const Styled = styled.div`
     min-height: calc(100vh - 71px);
     .left-panel {
          position: block;
          @media screen and (max-width: 767.9px){
               position: absolute;
               width: 90vw;
               
          }
     };

     .right-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          @media screen and (max-width: 767.9px){
               width: 85%;
               left: 14%;
               position: relative;
              
              
          }
     }
    `;


export const OpenLeftPanel = styled.div`
     position: absolute;
     z-index: 5;
     width: 0;
     left: -15px;
     top: 65px;
     transition: all .5s ease-out;
     transform: ${({ isOpen }) => isOpen ? 'translateX(90vw)' : 'translateX(0px)'};
     @media screen and (min-width: 767.9px){
               display: none;
          }
     `;

export const LeftPanel = styled.div`
          margin: 0px;
          
          max-height: calc(100vh - 71px);   
          overflow: auto;        
 @media screen and (max-width: 767.9px){
     padding: 4px;
          transition: all .5s ease-out;
          transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-90vw)'};
          z-index: 5;
          background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(158,158,158,1) 66%, rgba(255,255,255,1) 100%);
     }
`