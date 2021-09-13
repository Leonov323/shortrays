import { Button,  } from 'react-bootstrap';
import { Styled } from './Primary.styled'

function OrderButton() {
    return (
        <Styled>
            <Button className="order-button">
                <span className="textButtonNormal">Register now</span>
                <span className="textButtonHover">You are awesome!</span>
            </Button>
        </Styled>
    );
}

export default OrderButton;