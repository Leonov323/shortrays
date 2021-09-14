import styled, { css } from "styled-components"

export const Styled = styled.nav`
     ${props =>
    props.primary &&
    css`
    border-bottom: 1px solid #D9E7F0;
    a {
        text-decoration: none;
        color: black;
        text-transform: uppercase;
        };
        h2{
            
            margin: 0;
            display: flex;
            align-items: center;
        }
        
    h2 span {
        color: gray;
        border-bottom: 1px solid gray;
        margin-top: 1px;
    }

     .nav-item a {   
        padding: 16px;
        border: 1px solid black;       
        &:hover{
        background: black;
        color: white;
        };
    }
    `};

    .mobile {
            display: none;
        }

    @media screen and (max-width: 700px) {
        .desctop {
            display: none;
        }
        .mobile {
            display: fixed;
        }
        a h2 {
            color: white;
        }
    }
    `;