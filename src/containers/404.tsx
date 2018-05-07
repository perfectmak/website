import React from 'react';

import image404 from '@images/asset_9.svg';
import { MarketText, TeamDivWithResponsiveWidth } from '@styledComponents';

export default () => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    <TeamDivWithResponsiveWidth style={{ padding: '40px 0px 20px 0px' }}>
      <div style={{ textAlign: 'center' }}>
        <MarketText header>
          {'Something went wrong and we cannot find what your looking for...'}
        </MarketText>
        <br />
        <br />
        <img alt="404" src={image404} />
      </div>
      <br />
      <TeamDivWithResponsiveWidth style={{ padding: '40px 0px 20px 0px' }}>
        <MarketText header={true} align={'center'}>
          {'Get back on track'}
        </MarketText>
        <ul>
          <li>
            Try heading back to our{' '}
            <a href="https://marketprotocol.io/">homepage</a>
          </li>
          <li>
            Check out our{' '}
            <a href="https://docs.marketprotocol.io/#faq-general">FAQ</a>
          </li>
          <li>
            Read our <a href="https://docs.marketprotocol.io/">docs</a>
          </li>
        </ul>
      </TeamDivWithResponsiveWidth>
    </TeamDivWithResponsiveWidth>
  </div>
);
