import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { device, size } from '@src/breakpoints';
import { MarketHeader, MarketText } from '@src/Styles';
import config from './config';
import Person from './Person';

export const Section = styled.section`
  padding: 70px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 40px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 70px;
  }

  @media ${device.desktopS} {
    padding: 150px;
  }
`;

export const TextWrapper = styled.div`
  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px 40px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 0px 0px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 40px;
  }
`;

export const Header = MarketHeader.extend`
  font-size: 27px;
  font-weight: 600;
`;

export const ContentWrapper = styled.p`
    font-size: 16px
    font-weight: 300;
    line-height: 1.5rem;
    text-align: justify;
`;

export const PersonWrapper = styled.div`
  margin: 15px 0px;
`;

class Team extends React.Component {
  render() {
    return (
      <Section
        id="team"
        style={{
          background: '#ffffff'
        }}
      >
        <Row type="flex">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <TextWrapper>
              <Header>Team</Header>
              <ContentWrapper>
                The MARKET Protocol team comes from diverse technical and
                financial backgrounds with over 30 years of cumulative
                electronic trading experience on global exchanges. Co-founders
                Seth Rubin, Phil Elsasser, and Collins Brown have been working
                together since 2014 managing a 24-hour algorithmic trading group
                and started trading cryptocurrencies the next year. These
                experiences enabled the team to see how blockchain could solve
                many of the problems inherent to traditional and crypto exchange
                models. These insights catalyzed the development of MARKET
                Protocol, to create an open, trustless, and decentralized
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
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Team;
