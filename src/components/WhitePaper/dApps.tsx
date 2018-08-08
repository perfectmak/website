import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { device, size } from '@src/breakpoints';
import { ContentWrapper, MarketHeader, TextWrapper } from '@src/Styles';

export const Header = MarketHeader.extend`
  font-size: 27px;
  font-weight: 600;
`;

class DApps extends React.Component {
  render() {
    return (
      <TextWrapper id="dapps">
        <Header>dAPPS</Header>
        <ContentWrapper>
          In order to get the most out of MARKET Protocol for the non-technical
          user, distributed apps or “dApps” will be built by MARKET for use on
          the MARKET Protocol in addition to third party developers. MARKET
          plans to create simple user interfaces that intuitively explain the
          process of selecting contract variables and deploying MARKET Protocol
          contracts to the blockchain. Additionally, a contract explorer will
          provide the ability to search previously deployed MARKET contracts and
          their specifications. Users will also be able to test their oracle
          queries to ensure they function as expected prior to contract
          deployment.
        </ContentWrapper>
      </TextWrapper>
    );
  }
}

export default DApps;
