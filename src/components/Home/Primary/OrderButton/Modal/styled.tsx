import styled from 'styled-components'

export const Styled = styled.div`

`
export type ErrorStyledType = {
    error400?: boolean;
    repeatPasswordValid?: boolean;
}

export const ErrorMessage = styled.p<ErrorStyledType>`
    height: 0;
    position: relative;
    bottom: 15px;
    color: red;
    text-align: center;
    transition: .2s all linear .5;
    opacity: ${({ error400 }) => error400 ? '1' : '0'};
    cursor: ${({ error400 }) => error400 ? 'auto' : 'default'};
    user-select: ${({ error400 }) => error400 ? 'auto' : 'none'};
`
export const ErrorMessage2 = styled.p<ErrorStyledType>`
    height: 0px;
    position: relative;
    bottom: 30px;
    color: red;
    text-align: center;
    transition: .2s all linear .5;
    opacity: ${({ repeatPasswordValid }) => repeatPasswordValid ? '1' : '0'};
    cursor: ${({ repeatPasswordValid }) => repeatPasswordValid ? 'auto' : 'default'};
    user-select: ${({ repeatPasswordValid }) => repeatPasswordValid ? 'auto' : 'none'};
`