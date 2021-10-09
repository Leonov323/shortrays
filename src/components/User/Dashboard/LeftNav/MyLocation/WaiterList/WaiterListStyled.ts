import styled from 'styled-components'


type WaiterProps = {
    value?: boolean
}

export const WaiterListStyled = styled.div<WaiterProps>`
    display: ${ ({ value }) => value ? 'none' : 'flex'};
    flex-wrap: wrap;
    a {text-decoration: none;}
    span {
        font-size: 16px;
        color: white;
    }
`