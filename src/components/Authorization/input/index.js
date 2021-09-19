import { ContainerStyled, LabelStyled, InputStyled } from './styled';

export const AuthorizationInput = (props) => {
    const { labelText, onChange, value } = props;
    const inputChange = (e) => {
        onChange(e.target.value);
    }
    return (
      <ContainerStyled>
          <LabelStyled>{labelText}</LabelStyled>
          <InputStyled onChange={inputChange} value={value} />
      </ContainerStyled>
    );
};
