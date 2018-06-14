import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import logo_light from '@images/logo_light.svg';
import heroIllustration from '@images/whitepaper/hero_illustration.svg';
import { device, size } from '@src/breakpoints';

export const SectionWrapper = styled.section`
  padding: 70px 70px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 70px 30px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 70px 20px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 70px 200px;
  }

  .img {
    width: 100%;
  }

  h3 {
    font-size: 20px;
    font-weight: 100;
    margin-top: 40px;
    color: #ffffff;

    @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    }
  }

  p {
    font-size: 20px;
    font-weight: 100;
    color: #00e2c1;
  }
`;
class Banner extends React.Component {
  render() {
    return (
      <SectionWrapper
        style={{
          background: '#181e26',
          minHeight: '100vh'
        }}
      >
        <img className="img" src={logo_light} alt="MarketProtocol" />
        <h3>Powering safe, solvent & trustless trading of any asset</h3>
        <p>April 2018</p>
        <Row type="flex" justify="center">
          <img
            style={{
              height: '1%',
              width: '10rem'
            }}
            src={heroIllustration}
            alt="Market Protocol Illustration"
          />
        </Row>
      </SectionWrapper>
    );
  }
}

export default Banner;
