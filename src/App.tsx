import React from 'react';
import { Router } from 'react-static';
import { Helmet } from 'react-helmet';
import { injectGlobal } from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import { Layout } from 'antd';
const { Content } = Layout;
import MarketFooter from '@components/Footer';
import Navbar from '@components/Navbar';
import Popup from '@components/Popup';

injectGlobal`
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ width: '100%' }}>
          <Helmet>
            <title>
              MARKET Protocol - Decentralized trading on the Ethereum blockchain
              - cryptocurrency derivatives, futures, and hedging
            </title>
            <meta
              name="keywords"
              content="trustless trading, decentralized derivatives,
              decentralized futures, cryptocurrency derivatives,
              cryptocurrency futures, crypto shorting, crypto hedging,
              altcoin, bitcoin, ethereum, market protocol ico"
            />
            <meta
              name="description"
              content="MARKET Protocol provides a secure, flexible,
              open source foundation for decentralized trading on the
              Ethereum blockchain"
            />
          </Helmet>
          <Navbar />
          <Content style={{ background: '#FFFFFF', width: '100%' }}>
            <Routes />
          </Content>
          <Popup />
          <MarketFooter />
        </Layout>
      </Router>
    );
  }
}

export default hot(module)(App);
