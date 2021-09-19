import styled from 'styled-components'

export const Styled = styled.div` 
     font-family: 'lato', sans-serif;
     @media screen and (max-width: 767.9px){
               position: absolute;
               width: 100%;  
               z-index: 5;
          }
         
     .full {
          @media screen and (min-width: 767.9px){
               width: 100%;
          }
     }

     .hide-row {
          display: flex;
          justify-content: center;
          @media screen and (min-width: 767.9px){
               display: none;
          }
    `

export const LeftPanel = styled.div`
          margin: 0px;
          height: calc(100vh - 92px); 
          display: flex;              
 @media screen and (max-width: 767.9px){
          padding: 0px;
          transition: all .5s ease-out;
          transform: ${({ isOpen }) => isOpen ? 'translateX(0vw)' : 'translateX(-84vw)'};
          background:  #292b2c;
     }

`
