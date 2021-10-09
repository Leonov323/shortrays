import styled from 'styled-components'

export const LeftNavStyled = styled.div` 
    overflow-y: scroll;
    height: calc(100vh - 103px);
    `

type TableProps = {
    value?: boolean
}

export const TableListStyled = styled.div<TableProps>`
    display: ${ ({ value }) => value ? 'none' : 'flex'};
    flex-wrap: wrap;
    a {text-decoration: none;}
    span {
        font-size: 16px;
        color: white;
    }
` 

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