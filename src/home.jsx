import './App.css';
import Arm from './img/arm-min3.png';
import Button from './img/button.jpg';
import Display from './img/display.jpg';
import Pager from './img/pager.jpg';
import { PopUpWrapper } from './components/pop-up';
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
  };

  render() {
    return (
      <div className="home">
        <PopUpWrapper display={this.state.displayPopUp} closeCallback={this.orderClick} />

        <div className="presentation">
          <div className="left-block">
            <div className="left-block_section">
              <section>
                <h1>The way to better your service</h1>
                <p>Just put on the button to call a waiter, no more angry waiting clients.</p>
              </section>
              <button onClick={() => this.orderClick(true)}>
                <span className="textButtonNormal">Order now</span>
                <span className="textButtonHover">You are awesome!</span>
              </button>
            </div>
          </div>
          <div className="right-block">
            <img className="arm" src={Arm} alt={'test'} />
          </div>
        </div>
        <div className="catalog">
          <section>
            <div className="catalog_block">
              <h3>CALL BUTTONS FOR WAITERS AND STAFF</h3>
              <img src={Button} alt="Button" />
            </div>
            <ul>
              <li>Transmission distance: up to 150 meters (without obstacles)</li>
              <li>Power supply: 2 x CR2016 button cell (included)</li>
              <li>The battery in the button will last you from 1 to 3 years.</li>
              <li>Operating Temperature: -20°C~+55°C</li>
              <li>Material: ABS Plastic</li>
              <li>Size: 59 x 59 x 13 mm</li>
              <li>Color: Black</li>
              <li>Weight: 27 gram</li>
              <li>Operating frequency: 433MHz</li>
              <li>Compatible with all BELFIX receivers.</li>
              <li>Note! To call the staff you will need a receiver signal: pager or scoreboard.</li>
            </ul>
          </section>
          <section>
            <div className="catalog_block">
              <h3>CALL DISPLAY BOARD</h3>
              <img src={Display} alt="Display" />
            </div>
            <ul>
              <li>The degree of moisture resistance corresponds to the IPX7 standard.</li>
              <li>Displays 10 calls in scroll mode.</li>
              <li>The pager can be programmed for a maximum of 500 wireless transmitters (buttons).</li>
              <li>You can edit transmitter names and set functions to buttons.</li>
              <li>Battery life in different conditions: Up to 7 days.</li>
              <li>Built-in rechargeable lithium battery with high capacity.</li>
              <li>Improved power saving mode.</li>
              <li>The type of alert is vibration.</li>
              <li>Operating frequency: 433MHz</li>
              <li>Compatible with all BELFIX transmitters.</li>
              <li>Included: charger and setup instructions.</li>
            </ul>
          </section>
          <section>
            <div className="catalog_block">
              <h3>PAGERS FOR WAITERS AND STAFF</h3>
              <img src={Pager} alt="Pagers" />
            </div>
            <ul>
              <li>The degree of moisture resistance corresponds to the IPX7 standard.</li>
              <li>Displays 10 calls in scroll mode.</li>
              <li>The pager can be programmed for a maximum of 500 wireless transmitters (buttons).</li>
              <li>You can edit transmitter names and set functions to buttons.</li>
              <li>Battery life in different conditions: Up to 7 days.</li>
              <li>Built-in rechargeable lithium battery with high capacity.</li>
              <li>Improved power saving mode.</li>
              <li>The type of alert is vibration.</li>
              <li>Operating frequency: 433MHz</li>
              <li>Compatible with all BELFIX transmitters.</li>
              <li>Included: charger and setup instructions.</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
