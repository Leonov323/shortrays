import { Button,  } from 'react-bootstrap';
import { Styled } from './Primary.styled'

function OrderButton() {
    return (
        <Styled>
            <button className="order-button">
                <span className="textButtonNormal">Register now</span>
                <span className="textButtonHover">You are awesome!</span>
            </button>
        </Styled>
    );
}

export default OrderButton;