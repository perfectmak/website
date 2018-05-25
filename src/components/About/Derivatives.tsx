import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import shortSelling from '@images/about/short_selling.svg';
import hedging from '@images/about/hedging.svg';
import custody from '@images/about/custody.svg';
import { MarketHeader, MarketText } from '@src/Styles';
import { device, size } from '@src/breakpoints';

export const DerivativeWrapper = styled.section`
  padding: 50px;
  background: #f0f0f0;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px;
  }
`;

export const HeaderText = MarketHeader.extend`
  padding-left: 50px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 40px 20px;
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  background-color: ${props => props.bg || '#fff'};
  justify-content: center;
  padding: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 420px;
`;
export const ImageContainer = styled.img`
  margin: 0px auto;
`;

class Derivatives extends React.Component {
  render() {
    return (
      <DerivativeWrapper>
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
      </DerivativeWrapper>
    );
  }
}

export default Derivatives;
