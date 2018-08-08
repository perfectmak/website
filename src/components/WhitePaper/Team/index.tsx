import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import {
  ContentWrapper,
  MarketHeader,
  MarketText,
  TextWrapper
} from '@src/Styles';
import config from '@containers/Team/config';
import Person from './Person';

export const Header = MarketHeader.extend`
  font-size: 27px;
  font-weight: 600;
`;

export const PersonWrapper = styled.div`
  margin: 15px 0px;
`;

class Team extends React.Component {
  render() {
    return (
      <TextWrapper id="team">
        <Header>Team</Header>
        <ContentWrapper>
          The MARKET Protocol team comes from diverse technical and financial
          backgrounds with over 30 years of cumulative electronic trading
          experience on global exchanges. Co-founders Seth Rubin, Phil Elsasser,
          and Collins Brown have been working together since 2014 managing a
          24-hour algorithmic trading group and started trading cryptocurrencies
          the next year. These experiences enabled the team to see how
          blockchain could solve many of the problems inherent to traditional
          and crypto exchange models. These insights catalyzed the development
          of MARKET Protocol, to create an open, trustless, and decentralized
          trading marketplace.
        </ContentWrapper>
        <Row type="flex">
          {config.teamMembers.map((obj, index) => {
            return (
              <PersonWrapper key={index}>
                <Col key={index} xs={24} sm={24} md={24} xl={24}>
                  <Person data={obj} />
                  <MarketText
                    style={{ fontSize: '15px', textAlign: 'justify' }}
                  >
                    {obj.bio}
                  </MarketText>
                </Col>
              </PersonWrapper>
            );
          })}
        </Row>
        <Header>Advisors</Header>
        <Row type="flex">
          {config.advisors.map((obj, index) => {
            return (
              <PersonWrapper key={index}>
                <Col key={index} xs={24} sm={24} md={24} xl={24}>
                  <Person data={obj} />
                  <MarketText
                    style={{ fontSize: '15px', textAlign: 'justify' }}
                  >
                    {obj.bio}
                  </MarketText>
                </Col>
              </PersonWrapper>
            );
          })}
        </Row>
      </TextWrapper>
    );
  }
}

export default Team;
