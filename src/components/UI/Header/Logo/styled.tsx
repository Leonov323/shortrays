import styled from 'styled-components'

export const LogoStyled = styled.div`
    height: 65px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    span {
        color: #656565;
        border-bottom: 1px solid #656565;
    }
    @media (max-width: 380px) {
        font-size: .6rem;
    }
`

export const ImgStyled = styled.img`
    height: 65px;
    width: 65px;
    margin-right: 10px;
`