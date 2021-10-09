import styled from 'styled-components'

export type ErrorStyledType = {
    valid?: boolean;
  }
 
export const ErrorMessage = styled.p<ErrorStyledType>`
  color: red;
  text-align: center;
  transition: .2s all linear .5;
  opacity: ${({ valid }) => valid ? '1' : '0'};
  cursor: ${({ valid }) => valid ? 'auto' : 'default'};
  user-select: ${({ valid }) => valid ? 'auto' : 'none'};
`