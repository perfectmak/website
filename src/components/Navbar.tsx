import React from 'react';
import {Layout, Menu} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-static';
//
import logoImg from '@images/logo_light.svg';
const {Header} = Layout;

const Logo = styled.div`
  line-height: 64px;
  margin: 0;
  float: left;
`;

class Navbar extends React.Component {
  render() {
    return (
      <Header>
        <Logo><a href="/"><img alt="react-static" width="100%" src={logoImg}/></a></Logo>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{lineHeight: '64px', float: 'right'}}
        >
          <Menu.Item key="1">
            <Link to="/team" style={{color: 'inherit', textDecoration: 'none'}}>
              Team
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="http://marketprotocol.io.s3-website-us-east-1.amazonaws.com/assets/MARKET_Protocol-Whitepaper.pdf"
                  style={{color: 'inherit', textDecoration: 'none'}} target="_blank">
              Whitepaper
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
              FAQs
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/#ctaSection" style={{color: 'inherit', textDecoration: 'none'}}>
              Subscribe
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="https://medium.com/market-protocol"
                  style={{color: 'inherit', textDecoration: 'none'}} target="_blank">
              Blog
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="https://t.me/Market_Protocol_Chat" style={{color: 'inherit', textDecoration: 'none'}}
                  target="_blank">
              Telegram
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default Navbar;
