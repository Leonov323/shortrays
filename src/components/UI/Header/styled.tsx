import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    margin: 0px;
    padding: 0px 20px;
    display: flex;
    position: relative;
    z-index: 2000;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #C0C0C0;    
    .hamburger-react {
            display: none;        
        }
        @media (max-width: 768px) {
        .hamburger-react {
            display: block;
            }
        }
    a {
        text-decoration: none;
    } 
`