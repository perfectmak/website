import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { device, size } from '@src/breakpoints';
import { MarketHeader } from '@src/Styles';

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

    .order {
      width: 100%;
    }
    .userNetPosition {
      width: 100%;
    }
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

class DApps extends React.Component {
  render() {
    return (
      <Section
        id="dapps"
        style={{
          background: '#ffffff',
          minHeight: '100vh'
        }}
      >
        <Row type="flex" align="left">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <TextWrapper>
              <Header>dAPPS</Header>
              <ContentWrapper>
                In order to get the most out of MARKET for the non-technical
                user, distributed apps or “dApps” will be built by MARKET for
                use on the MARKET Protocol in addition to third party
                developers. MARKET plans to create simple user interfaces that
                intuitively explain the process of selecting contract variables
                and deploying MARKET contracts to the blockchain. Additionally,
                a contract explorer will provide the ability to search
                previously deployed MARKET contracts and their specifications.
                Users will also be able to test their oracle queries to ensure
                they function as expected prior to contract deployment.
              </ContentWrapper>
            </TextWrapper>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default DApps;
