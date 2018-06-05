import React, { Component } from 'react';
import linkInfos from './config';
import { MarketHeader } from '@styledComponents';
import throttle from 'lodash/throttle';
import SingleLink, { DisplayDirection } from '@components/Press/SingleLink';
import colors from '@styles/json/colors';

class Press extends Component {
  state: { displayDirection?: DisplayDirection } = {};

  componentDidMount() {
    const displayDirection = window.innerWidth > 768 ? 'row' : 'column';
    this.setState({ displayDirection });

    window.addEventListener(
      'resize',
      throttle(e => {
        const { innerWidth } = e.target;
        const nextDisplayDirection = innerWidth > 768 ? 'row' : 'column';
        this.setState({ displayDirection: nextDisplayDirection });
      }, 500)
    );
  }

  render() {
    const { displayDirection = 'row' } = this.state;

    return (
      <div>
        <div
          style={{
            margin: 'auto',
            maxWidth: '800px',
            padding: '40px 35px'
          }}
        >
          <MarketHeader>{'MARKET Protocol in the press'}</MarketHeader>
          <br />
          {linkInfos.map((todo, i) => (
            <SingleLink key={i} displayDirection={displayDirection} {...todo} />
          ))}
        </div>
      </div>
    );
  }
}

export default Press;
