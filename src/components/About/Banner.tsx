import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import header from '@images/about/header.svg';
import { device, size } from '@src/breakpoints';

export const HeroArt = styled.div`
  text-align: right;
  margin-top: 90px;
  img {
    width: 80%;
  }
  
  @media (max-width: ${size.mobileS}) and (max-width: ${size.mobileL}) {
    opacity: 0.4
    margin-top: -80px;
    
    img {
      width: 50%;
    }
  }
  
  @media ${device.mobileS} and (max-width: 767px) {
    opacity: 0.4
    margin-top: -80px;
    z-index: -1;
    
    img {
      width: 50%;
    }
  }
`;

export const TextWrapper = styled.div`
  margin: 50px 0px 120px 70px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    margin: 0px 0px 0px 20px;
  }
`;

export const HeroText = styled.div`
  color: #f0f0f0;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 30px;

  @media ${device.mobileS} {
    font-size: 22px;
    margin-bottom: 0px;
  }

  @media ${size.mobileS} and (max-width: ${size.tablet}) {
    font-size: 38px;
    margin-bottom: 0px;
  }

  @media ${device.tablet} {
    font-size: 38px;
    margin-bottom: 30px;
  }

  @media ${device.laptop} {
    font-size: 60px;
  }
`;

export const HeroInfo = styled.p`
  color: #fff;
  font-size: 22px;
  max-width: 470px;

  @media ${device.mobileS} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 22px;
  }
`;

class Banner extends React.Component {
  render() {
    return (
      <section
        style={{
          background: '#181E26',
          minHeight: '300px'
        }}
      >
        <Row type="flex" className="hero" align="middle">
          <Col xs={24} md={10}>
            <TextWrapper>
              <HeroText>About</HeroText>
              <HeroInfo>
                Crypto as an asset class is growing quickly with many promising
                projects in a variety of applications, but with rapid progress
                comes challenges.
              </HeroInfo>
              <HeroInfo>
                Due to price volatility, crypto assets can’t effectively
                function as a medium of exchange or in token applications. This
                volatility further limits crypto as a store of value relative to
                other digital or traditional assets. Until these challenges are
                addressed, the blockchain space cannot achieve scale.
              </HeroInfo>
            </TextWrapper>
          </Col>
          <Col xs={24} md={14}>
            <HeroArt>
              <img alt="hero" src={header} />
            </HeroArt>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Banner;
