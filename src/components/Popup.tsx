import React from 'react';
import {Col, Row, Button, Icon} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-static';
//
import telegram from '@images/telegram.svg';
import {device, size} from "@src/breakpoints";


const PopupArt = styled.div`
  /*layout*/
  background-color: #fff;
  border-radius: 0.1rem;
  font-size: 1rem;
  height: 6rem;
  width: 18rem;
  text-align: center;

  /*positioning*/
  bottom: 1.5rem;
  right: 1.5rem;
  position: fixed;

  /*material*/
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 10;
  `;

/*text stuff*/
const PopupText = styled.div`
  color: #000000;
  padding: 4px;`;

const PopupButton = styled(Button)`
  width: 14rem;
`;

const PopupButtonText = styled.div`
color: #212121;
font-size: 1rem;
padding: 0.3rem;
img{
  fill: #fefefe;
}`;

const PopupClose = styled(Icon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  &:hover {
    color: #26e1c1;
  }
`;

class Popup extends React.Component {
  constructor(){
    super();
    this.state = {
      telegramDisplay: false
    };
    this.closeTelegramDisplay=this.closeTelegramDisplay.bind(this);
  }
  componentDidMount(){
    setTimeout(function() {
      this.setState({
        telegramDisplay: true
      });
    }.bind(this), 3000);
  }
  closeTelegramDisplay(){
    this.setState({
      telegramDisplay: false
    });
  }
  render() {
    if(this.state.telegramDisplay) {
      return (
        <PopupArt  align="center">
          <PopupText>Chat with us.</PopupText>
          <Link to="https://t.me/Market_Protocol_Chat" target="_blank">
            <PopupButton type="primary">
              <PopupButtonText>
                <img alt="telegram" src={telegram} height="100%" fill="#FFFFFF" style={{marginRight: '5px'}}/>
                  Join our Telegram.
              </PopupButtonText>
            </PopupButton>
          </Link>
          <PopupClose type="close" onClick={this.closeTelegramDisplay}/>
        </PopupArt>
      );
    }
    return(
      null
    );
  }
}
export default Popup;
