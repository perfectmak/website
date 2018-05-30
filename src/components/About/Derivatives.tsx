import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import shortSelling from '@images/about/short_selling.svg';
import hedging from '@images/about/hedging.svg';
import custody from '@images/about/custody.svg';
import { MarketHeader, MarketText, SectionWrapper } from '@src/Styles';
import { device, size } from '@src/breakpoints';

export const HeaderText = MarketHeader.extend`
  padding-bottom: 40px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 60px 20px 20px 20px;
  }
`;

export const Wrapper = styled.div`
  background-color: ${props => props.bg || '#fff'};
  justify-content: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${device.mobileL} {
    height: 420px;
  }
`;
export const ImageContainer = styled.img`
  margin: 0px auto;
`;

class Derivatives extends React.Component {
  render() {
    return (
      <SectionWrapper style={{ background: '#f0f0f0' }}>
        <HeaderText>How Derivatives can help</HeaderText>
        <Row type="flex">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Wrapper bg="#fff">
              <ImageContainer src={shortSelling} alt="Short Selling" />
              <MarketHeader
                style={{
                  fontSize: '18px'
                }}
              >
                Short Selling
              </MarketHeader>
              <MarketText>Can help reduce volatility</MarketText>
            </Wrapper>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Wrapper bg="#181E26">
              <ImageContainer src={hedging} alt="Hedging" />
              <MarketHeader
                style={{
                  color: '#ffffff',
                  fontSize: '18px'
                }}
              >
                Hedging
              </MarketHeader>
              <MarketText
                style={{
                  color: '#ffffff'
                }}
              >
                Essential for risk mitigation
              </MarketText>
            </Wrapper>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Wrapper bg="#00E2C1">
              <ImageContainer src={custody} alt="Custody Of Assets" />
              <MarketHeader
                style={{
                  fontSize: '18px'
                }}
              >
                Custody of Assets
              </MarketHeader>
              <MarketText>Price exposure is simpler</MarketText>
            </Wrapper>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}

export default Derivatives;
