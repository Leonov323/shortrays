import styled from "styled-components"

export const Styled = styled.div` 
     min-height: calc(100vh - 92px);
     overflow: auto;
     height: 100%;
     @media screen and (max-width: 767.9px) {
     width: 80vw;
     position: relative;
     left: 18vw;
     z-index: 4;
          }
    `;
