import React from 'react';
import { Button, Layout, Menu, Popover } from 'antd';
import styled from 'styled-components';
import { Link, scrollTo } from 'react-static';
import { size } from '../breakpoints';
import logoImg from '@images/logo_light.svg';

const { Header } = Layout;
const externalLinks = ['/whitepaper', '/blog', '/faq', '/telegram'];

const Logo = styled.div`
  line-height: 64px;
  margin: 0;
  float: left;

  @media (max-width: ${size.mobileS}) {
    max-width: 200px;
  }
`;

const StyledMenu = styled(Menu)`
  @media (max-width: ${size.tablet}) {
    &.ant-menu-dark {
      display: none;
    }

    &.ant-menu-light.ant-menu-vertical {
      display: block;
      background: #fff;
      border-right: 0;

      .ant-menu-item-selected {
        border-radius: 12px;
        background-color: #f1f1f1;
        color: #00ad94;
      }
    }
  }
`;

const MobileMenuToggle = styled(Button)`
  &.ant-btn {
    display: none;
    cursor: pointer;
    float: right;
    margin-top: 13px;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }

  i {
    font-size: 20px;
    color: #fff;
  }

  @media (max-width: ${size.tablet}) {
    &.ant-btn {
      display: block;
    }
  }

  @media (max-width: ${size.mobileM}) {
    &.ant-btn {
      margin-left: 5px;
      width: 32px;
      height: 32px;
      margin-top: 17px;
      line-height: 32px;
      i {
        font-size: 16px;
      }
    }
  }
`;

const HeaderWrapper = styled.div`
  @media (max-width: ${size.mobileM}) {
    .ant-layout-header {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media (max-width: ${size.mobileS}) {
    .ant-layout-header {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .ant-popover-arrow {
    top: -4px;
  }

  .ant-popover-inner-content {
    padding-left: 10px;
    padding-right: 10px;
  }

  .ant-popover-inner {
    border-radius: 25px;
  }
`;

class Navbar extends React.Component {
  state = {
    current: ''
  };

  componentDidMount() {
    if (!externalLinks.includes(location.pathname)) {
      this.setState({
        current: location.pathname
      });
    }
  }

  handleClick = e => {
    const path = e.key || e;
    if (!externalLinks.includes(path)) {
      this.setState({
        current: path
      });
    }
    const resolvedHash = path.substring(path.indexOf('#') + 1);
    if (path === location.pathname + location.hash) {
      const element = document.getElementById(resolvedHash);
      if (element !== null) {
        scrollTo(element);
      }
    }
  }

  renderMenuMarkup(breakpoint: string): JSX.Element {
    return (
      <StyledMenu
        theme={breakpoint === 'desktop' ? 'dark' : 'light'}
        mode={breakpoint === 'desktop' ? 'horizontal' : 'vertical'}
        style={{
          float: breakpoint === 'desktop' ? 'right' : 'none',
          lineHeight: '64px'
        }}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
      >
        <Menu.Item key="/team">
          <Link to="/team" style={{ color: 'inherit', textDecoration: 'none' }}>
            Team
          </Link>
        </Menu.Item>
        <Menu.Item key="/whitepaper">
          <Link
            to="https://www.marketprotocol.io/assets/MARKET_Protocol-Whitepaper.pdf"
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
          >
            Whitepaper
          </Link>
        </Menu.Item>
        <Menu.Item key="/faq">
          <Link
            to="https://docs.marketprotocol.io/#faq-general"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            FAQs
          </Link>
        </Menu.Item>
        <Menu.Item key="/#subscribe">
          <Link
            to="/#subscribe"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Subscribe
          </Link>
        </Menu.Item>
        <Menu.Item key="/blog">
          <Link
            to="https://medium.com/market-protocol"
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
          >
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item key="/telegram">
          <Link
            to="https://t.me/Market_Protocol_Chat"
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
          >
            Telegram
          </Link>
        </Menu.Item>
      </StyledMenu>
    );
  }

  render(): JSX.Element {
    return (
      <HeaderWrapper>
        <Header>
          <Logo>
            <Link
              to="/"
              style={{ color: 'inherit', textDecoration: 'none' }}
              onClick={() => this.handleClick('/')}
            >
              <img alt="react-static" width="100%" src={logoImg} />
            </Link>
          </Logo>
          {this.renderMenuMarkup('desktop')}
          <Popover
            getPopupContainer={triggerNode =>
              triggerNode.parentNode as HTMLElement
            }
            content={this.renderMenuMarkup('mobile')}
            trigger="click"
            arrowPointAtCenter={true}
          >
            <MobileMenuToggle shape="circle" icon="bars" />
          </Popover>
        </Header>
      </HeaderWrapper>
    );
  }
}

export default Navbar;
