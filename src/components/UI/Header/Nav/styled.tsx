import styled from 'styled-components'
import { NavStyledProps } from './types'
  
export const NavStyled = styled.nav<NavStyledProps>`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-weight: 500;
    @media (max-width: 768px) {
      position: fixed;
      bottom: 30px;
      font-weight: 700;
      transition: opacity .3s ease-out;
      bottom: ${({ isOpen }) => isOpen ? '30px' : '100vh'};
      opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
      left: 0;
      background: #ffffffc7;
      height: calc(100vh - 100px);
      display: block;
      div {
          width: 90%;
          height: 15vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          margin-top: 3vh;
          a {
              width: 100%;
              text-align: center;
          }
      }
      
  }
`