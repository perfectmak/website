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
              <MarketHeader>We love open source!</MarketHeader>
              <OpenSourceText>
                Come join the development community that is building MARKET
                Protocol
              </OpenSourceText>
              <Link
                to="https://docs.marketprotocol.io/#contributing"
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <ButtonWrapper type="primary">Contribution Guide</ButtonWrapper>
              </Link>
              <Link
                to="https://app.zenhub.com/workspace/o/marketprotocol/market.js/boards?repos=
                    140627375,128025988,130496585,117898415,119072718,116695875,130494562,
                    131598556,108304540,127038994,141709662,135627327,129016888"
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <ButtonWrapper type="primary">
                  Check out open issues on Github
                </ButtonWrapper>
              </Link>
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
              <p style={{ fontSize: '22px', fontWeight: '400' }}>
                Every Thurdsay 8AM MT
              </p>
              <Link
                to="https://github.com/MARKETProtocol/community/blob/master/docs/engineering-weekly.md"
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <ButtonWrapper type="primary">Learn more</ButtonWrapper>
              </Link>
              <Link
                // tslint does not like the long string
                // tslint:disable-next-line
                to="https://calendar.google.com/event?action=TEMPLATE&tmeid=NnVmdnU1NHAyYjdoODk1MGY1YzU2YzVrM25fMjAxODA3MDVUMTQwMDAwWiBtYXJrZXRwcm90b2NvbC5pb190dGE5NmhzdXAxbWViOWVkdHJwMnZuaGZlb0Bn&tmsrc=marketprotocol.io_tta96hsup1meb9edtrp2vnhfeo%40group.calendar.google.com&scp=ALL"
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <ButtonWrapper type="primary">Add To Calendar</ButtonWrapper>
              </Link>
            </TextWrapper>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}

export default Opensource;
