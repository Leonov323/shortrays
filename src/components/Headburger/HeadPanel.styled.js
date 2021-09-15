import styled from 'styled-components'

export const HeadPanelStyled = styled.div`
        position: fixed;
        z-index: -1;
        height: 100vh;
        width: 100vw;
        background: #292b2c;
        left: 0;
        top: -200vh;
        transition: all .5s ease-out;
        transform: ${({ isOpen }) => isOpen ? 'translatey(200vh)' : 'translatey(-200vh)'};
        padding: 50px 0px;
        overflow: auto;
        a {
            width: 100%;
        }
        h3 {
        margin: 0px;
        }
       
        .mobile {
            display: none;
        }

    @media screen and (min-width: 700px) {
        .mobile {
            display: fixed;
        }
`

export const HeaderSpace = styled.div`
    height: 48px;
    width: 100%;
    background: #292b2c;;
    
`