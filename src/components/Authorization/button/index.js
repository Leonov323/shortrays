import { ButtonStyled } from './styled';

export const AuthorizationSubmit = (props) => {
    const { text, onSubmit } = props;

    return <ButtonStyled onClick={onSubmit}>
        {text}
    </ButtonStyled>
};
