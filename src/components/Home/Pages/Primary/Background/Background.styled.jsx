import styled from 'styled-components';

export const Styled = styled.div`
  position: absolute;
  z-index: -2;
  bottom: 0;
  right: 0;
  width: 90vh;
  display: flex;
  @media screen and (max-width: 1199.9px) {
    display: none;
  }
`;
