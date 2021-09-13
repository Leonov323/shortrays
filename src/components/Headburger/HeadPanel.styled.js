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
        padding-top: 75px;
        a {
            width: 100%;
        }


        .mobile {
            display: none;
        }

    @media screen and (min-width: 700px) {
        .mobile {
            display: fixed;
        }
`

export const OpacityHover = styled.div`
    transition: opacity .2s linear;
    
    span {
            color: #b3b3b3;
            border-bottom: 1px solid gray;
        }
    &:hover {
        opacity: 0.7;
    }
    a {
        text-decoration: none;
    }
`

export const HeaderSpace = styled.div`
    height: 48px;
    width: 100%;
    background: #292b2c;;
    
`