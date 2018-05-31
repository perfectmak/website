import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-static';
import { MarketHeader, MarketText, SectionWrapper } from '@src/Styles';
import { device, size } from '@src/breakpoints';
import mobile from '@images/about/mobile.svg';
import protocol from '@images/about/protocol.svg';

export const IllustrationContainer1 = styled.div`
  background-color: #00e2c1;
  padding: 100px;
  text-align: center;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 50px;
    margin: 40px 0px;
  }

  img {
    @media ${device.mobileS} and (max-width: ${size.tablet}) {
      width: 40%;
    }

    @media ${device.tablet} and (max-width: ${size.laptop}) {
      width: 80%;
    }

    @media ${device.desktopS} {
      width: 60%;
    }
  }
`;

const IllustrationContainer2 = styled.div`
  background-color: #00e2c1;
  padding: 100px;
  text-align: center;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 50px;
    margin: 40px 0px;
  }

  img {
    @media ${device.mobileS} and (max-width: ${size.tablet}) {
      width: 30%;
    }

    @media ${device.tablet} and (max-width: ${size.laptop}) {
      width: 60%;
    }

    @media ${device.desktopS} {
      width: 40%;
    }
  }
`;

const TextWrapper = styled.div`
  padding: 20px;

  @media ${device.tablet} and (max-width: ${size.laptopL}) {
    padding: 0 40px;
  }

  @media ${device.laptopL} {
    padding: 0 80px;
  }

  @media ${device.desktopS} {
    padding: 0 120px;
  }
`;

export const ButtonWrapper = styled(Button)`
  margin-top: 20px;
  margin-right: 20px;
  width: 65%;

  @media ${device.mobileS} and (max-width: ${size.laptop}) {
    width: 100%;
  }
`;

const OpenSourceText = MarketText.extend`
  margin: 35px 0px;

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    margin: 10px 0px;
  }

  @media ${device.laptop} and (max-width: ${size.laptopL}) {
    margin: 20px 0px 10px 0px;
  }

  @media ${device.laptopL} {
    margin: 35px 0px;
  }
`;

class Opensource extends React.Component {
  render() {
    return (
      <SectionWrapper style={{ background: '#f0f0f0' }}>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <IllustrationContainer1>
              <img
                alt="Open Source Derivatives Protocol"
                src={protocol}
                width="60%"
              />
            </IllustrationContainer1>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <TextWrapper>
              <MarketHeader>
                We love open source! Contribute to our project!
              </MarketHeader>
              <OpenSourceText>
                Come join the development community that is building MARKET
                Protocol
              </OpenSourceText>
              <ButtonWrapper type="primary">
                <Link
                  to="https://docs.marketprotocol.io/#contributing"
                  target="_blank"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Contribution Guide
                </Link>
              </ButtonWrapper>
              <ButtonWrapper type="primary">
                <Link
                  to="https://github.com/orgs/MARKETProtocol/projects/1"
                  target="_blank"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Check out open issues on Github
                </Link>
              </ButtonWrapper>
            </TextWrapper>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 12, push: 12 }}
            lg={{ span: 12, push: 12 }}
            xl={{ span: 12, push: 12 }}
          >
            <IllustrationContainer2>
              <img alt="mobile" src={mobile} width="40%" />
            </IllustrationContainer2>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={{ span: 12, pull: 12 }}
            lg={{ span: 12, pull: 12 }}
            xl={{ span: 12, pull: 12 }}
          >
            <TextWrapper>
              <MarketHeader>Engineering Weekly</MarketHeader>
              <OpenSourceText>
                Dont forget to join us for Engineering Weekly, our technical
                community call that is open to everyone!
              </OpenSourceText>
              <p style={{ fontSize: '24px', fontWeight: '500' }}>
                Every Thurdsay 8AM MT
              </p>
              <ButtonWrapper type="primary">
                <Link
                  to="https://github.com/MARKETProtocol/community/blob/master/docs/engineering-weekly.md"
                  target="_blank"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  Learn more
                </Link>
              </ButtonWrapper>
            </TextWrapper>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}

export default Opensource;
