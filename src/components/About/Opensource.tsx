import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { MarketHeader, MarketText } from '@src/Styles';
import { device, size } from '@src/breakpoints';
import mobile from '@images/about/mobile.svg';
import protocol from '@images/about/protocol.svg';

export const SectionWrapper = styled.section`
  background: #f0f0f0;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 0px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px;
  }

  @media ${device.laptop} {
    padding: 0px;
  }
`;

export const Wrapper = styled.div`
  padding: 70px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
  }
`;

export const IllustrationContainer = styled.div`
  background-color: #00e2c1;
  text-align: center;
  img {
    padding: 30px;
  }

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    margin: 20px;
    img {
      width: 50%;
      padding: 0px;
      margin: 30px;
    }
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    img {
      height: 260px;
      margin: 30px;
    }
  }

  @media ${device.laptop} and (max-width: ${size.laptopL}) {
    img {
      height: 350px;
      margin: 30px;
    }
  }

  @media ${device.laptopL} {
    img {
      // height: 100px
    }
  }
`;

export const TextWrapper = styled.div`
  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    margin: 20px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 40px;
    max-width: 600px;
  }

  @media ${device.laptop} {
    padding: 0 70px;
  }
`;

export const HeaderText = MarketHeader.extend`
  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 0px 0px;
    font-size: 32px;
    max-width: 500px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 0px;
    font-size: 21px;
    max-width: 350px;
  }

  @media ${device.laptop} and (max-width: ${size.laptopL}) {
    padding: 10px 0px;
    font-size: 24px;
    max-width: 350px;
  }

  @media ${device.laptopL} {
    padding: 10px 0px;
    font-size: 28px;
    max-width: 450px;
  }
`;

export const AdditionalInfo = MarketText.extend`
  font-size: 16px;
  max-width: 350px;
  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 0px 0px;
    max-width: 600px;
    font-size: 16px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 0px;
    font-size: 13px;
  }

  @media ${device.laptop} and (max-width: ${size.laptopL}) {
    padding: 10px 0px;
    font-size: 14px;
    max-width: 320px;
  }
`;

export const ButtonWrapper = styled.button`
  width: 80%;
  padding: 15px;
  border-radius: 40px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border: 2px solid #00e2c1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    width: 100%;
    font-size: 14px;
    padding: 15px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    width: 100%;
    font-size: 12px;
    font-weight: 600;
    padding: 10px;
  }

  @media ${device.laptop} and (max-width: ${size.laptopL}) {
    font-size: 13px;
    padding: 15px;
    margin: 10px 0;
    width: 85%;
  }

  @media ${device.laptopL} {
    font-size: 14px;
    padding: 10px;
    margin: 5px 0;
    width: 80%;
  }
`;

class Opensource extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <Wrapper>
          <Row type="flex" align="middle">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <IllustrationContainer>
                <img alt="Open Source Derivatives Protocol" src={protocol} />
              </IllustrationContainer>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <TextWrapper>
                <HeaderText>
                  We love open source! Contribute to our project!
                </HeaderText>
                <AdditionalInfo>
                  Come join the development community that is building MARKET
                  Protocol
                </AdditionalInfo>
                <Row type="flex" align="middle">
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <a
                      href="https://docs.marketprotocol.io/#contributing"
                      target="_blank"
                    >
                      <ButtonWrapper type="primary">
                        Contribution Guide
                      </ButtonWrapper>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <a
                      href="https://github.com/MARKETProtocol/website/issues"
                      target="_blank"
                    >
                      <ButtonWrapper type="primary">
                        Check out open issues on Github
                      </ButtonWrapper>
                    </a>
                  </Col>
                </Row>
              </TextWrapper>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={{
                push: 12,
                span: 12
              }}
              lg={{
                push: 12,
                span: 12
              }}
              xl={{
                push: 12,
                span: 12
              }}
            >
              <IllustrationContainer>
                <img alt="mobile" src={mobile} />
              </IllustrationContainer>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={{
                pull: 12,
                span: 12
              }}
              lg={{
                pull: 12,
                span: 12
              }}
              xl={{
                pull: 12,
                span: 12
              }}
            >
              <TextWrapper>
                <HeaderText header>Engineering Weekly</HeaderText>
                <p
                  style={{
                    fontSize: '18px'
                  }}
                />
                <AdditionalInfo className="info">
                  Dont forget to join us for Engineering Weekly, our technical
                  community call that is open to everyone!
                </AdditionalInfo>

                <HeaderText
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '23px',
                    paddingTop: '30px'
                  }}
                >
                  Every Thursday 8AM MT
                </HeaderText>
              </TextWrapper>
            </Col>
          </Row>
        </Wrapper>
      </SectionWrapper>
    );
  }
}

export default Opensource;
