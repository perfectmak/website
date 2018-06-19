import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
//
import heroIllustration from '@images/hero-illustration.svg';
import { device, size } from '@src/breakpoints';

export const HeroArt = styled.div`
  text-align: right;
  margin-top: -20px;

  img {
    width: 70%;
  }

  @media (max-width: ${size.mobileS}) and (max-width: ${size.mobileL}) {
    opacity: 0.4;
    margin-top: -80px;

    img {
      width: 50%;
    }
  }

  @media ${device.mobileS} and (max-width: 767px) {
    opacity: 0.4;
    margin-top: -80px;
    z-index: -1;

    img {
      width: 50%;
    }
  }
`;

export const HeroText = styled.h1`
  color: #f0f0f0;
  font-size: 50px;
  font-weight: 700;
  margin: 150px 50px 0 50px;
  line-height: 1.2;

  @media ${device.mobileS} {
    font-size: 22px;
    margin: 70px 50px 0 50px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    font-size: 38px;
    margin: 150px 70px 0 70px;
  }

  @media ${device.tablet} {
    font-size: 38px;
    margin: -50px 0 0 50px;
  }

  @media ${device.laptop} {
    font-size: 50px;
  }
`;

class Hero extends React.Component<{ text?: string }, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <section style={{ background: '#181E26', minHeight: '300px' }}>
        <Row type="flex" className="hero" align="middle">
          <Col xs={24} md={10} style={{ zIndex: 1 }}>
            <HeroText>
              {this.props.text ||
                'Powering safe, solvent and trustless trading of any asset.'}
            </HeroText>
          </Col>
          <Col xs={24} md={14}>
            <HeroArt>
              <img
                alt="trade stocks ethereum blockhain derivatives"
                src={heroIllustration}
              />
            </HeroArt>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Hero;
