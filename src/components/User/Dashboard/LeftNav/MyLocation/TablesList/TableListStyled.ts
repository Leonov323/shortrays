import styled from 'styled-components'

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
