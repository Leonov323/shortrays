import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
color: rgb(56, 56, 56);
box-shadow: none;
}
18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100% {
color: #fff;
box-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4, 0 0 80px #03bcf4, 0 0 100px #03bcf4,
}
`

export const Styled = styled.div`
    .order-button {
    padding: 20px 45px;
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
    border-radius: 36px;
    background-color: black;
    color: white;
    animation: 5s ${fadeIn} linear infinite;
    font-size: larger;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;}
    .order-button:hover .textButtonNormal {
    display: none;
    }
    .order-button .textButtonHover {
    display: none;
    }
    .order-button:hover .textButtonHover {
    display: block;
    color: red;
    }
    `;

