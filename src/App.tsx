import React from 'react';
import {Link, Switch, Router, Route, withRouter} from 'react-static';
import {injectGlobal} from 'styled-components';
import {hot} from 'react-hot-loader';
//
import Routes from 'react-static-routes';
import {Layout} from 'antd';
const {Content} = Layout;
import MarketFooter from '@components/Footer';
import Navbar from '@components/Navbar';

injectGlobal`
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
`;

function Redirect(url: string): string {
  window.location.replace(url);
  return `Redirecting to ${url}`;
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{width: '100vw'}}>
          <Navbar/>
          <Content style={{background: '#FFFFFF', width: '100%vw'}}>
            <Switch>
              <Route path="/discord" render={Redirect.bind(null, "https://discordapp.com/invite/qN8MCbq")} />
              <Route path="/telegram" render={Redirect.bind(null, "https://t.me/Market_Protocol_Chat")} />
              <Routes />
            </Switch>
          </Content>
          <MarketFooter />
        </Layout>
      </Router>
    )
  }
}

export default hot(module)(App);
