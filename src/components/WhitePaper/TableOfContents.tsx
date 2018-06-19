import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-static';
import { MarketHeader } from '@src/Styles';
import { device, size } from '@src/breakpoints';

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
`;

export const ItemWrapper = styled.p`
  line-height: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

class TableOfContents extends React.Component {
  render() {
    return (
      <Section
        style={{
          background: '#ffffff',
          minHeight: '10vh'
        }}
      >
        <Row type="flex">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <TextWrapper>
              <MarketHeader>Table of Contents</MarketHeader>
              <ItemWrapper>
                <Link to="#summary">
                  <span>Summary</span>
                </Link>
              </ItemWrapper>
              <ItemWrapper>
                <Link to="#problems">
                  <span>Problems Addressed By MARKET Protocol</span>
                </Link>
              </ItemWrapper>
              <ItemWrapper>
                <Link to="#market">
                  <span>MARKET Protocol</span>
                </Link>
              </ItemWrapper>
              <ItemWrapper>
                <Link to="#technical">
                  <span>Technical Specifications</span>
                </Link>
              </ItemWrapper>
              <ItemWrapper>
                <Link to="#dapps">
                  <span>dApps</span>
                </Link>
              </ItemWrapper>
              <ItemWrapper>
                <Link to="#mkt">
                  <span>MKT Token</span>
                </Link>
              </ItemWrapper>
              <ItemWrapper>
                <Link to="#contract">
                  <span>MARKET Protocol Contract Examples</span>
                </Link>
              </ItemWrapper>
              <ItemWrapper>
                <Link to="#team">
                  <span>Team</span>
                </Link>
              </ItemWrapper>
              <ItemWrapper>
                <Link to="#team">
                  <span>Advisors</span>
                </Link>
              </ItemWrapper>
            </TextWrapper>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default TableOfContents;
