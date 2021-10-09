import styled from 'styled-components'

export const HomeStyled = styled.div`
    padding: 20px;
    width: 100%;
    min-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 900px) {
        justify-content: center;
    }
`