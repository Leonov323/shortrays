import './style.css';
import Arm from '../../img/arm-min3.png';
import { PopUpWrapper } from '../pop-up';
import Catalog from '../catalog';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayPopUp: false };
  }

  orderClick = (display) => {
    this.setState({
      displayPopUp: display,
    });

    if (display) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  render() {
    return (
      <div>
        <PopUpWrapper display={this.state.displayPopUp} closeCallback={this.orderClick} />
        <div className="presentation">
          <div className="left-block">
            <div>
              <section>
                <h1>The way to better your service</h1>
                <p>Just put on the button to call a waiter, no more angry waiting clients.</p>
              </section>
              <button className="order-button" onClick={() => this.orderClick(true)}>
                <span className="textButtonNormal">Order now</span>
                <span className="textButtonHover">You are awesome!</span>
              </button>
            </div>
          </div>
          <div className="right-block">
            <img className="arm" src={Arm} alt={'test'} />
          </div>
        </div>
        <Catalog />
      </div>
    );
  }
}

export default Home;
