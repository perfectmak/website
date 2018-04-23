import React from 'react';
import {Layout, Menu} from 'antd';
import styled from 'styled-components';
import logoImg from 'images/logo_light.svg';
import {Link} from 'react-static';
//
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
            <Link to="/about" style={{color: 'inherit', textDecoration: 'none'}}>
              Team
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
              Whitepaper
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
              FAQs
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="#" style={{color: 'inherit', textDecoration: 'none'}}>
              Subscribe
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="https://medium.com/market-protocol" style={{color: 'inherit', textDecoration: 'none'}}>
              Blog
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="https://t.me/Market_Protocol_Chat" style={{color: 'inherit', textDecoration: 'none'}}>
              Telegram
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default Navbar;
