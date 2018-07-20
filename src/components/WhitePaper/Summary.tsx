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
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 0px 0px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 40px;
  }
`;

export const ContentWrapper = styled.p`
    font-size: 16px
    font-weight: 300;
    line-height: 1.5rem;
    text-align: justify;
`;

class Summary extends React.Component {
  render() {
    return (
      <Section
        id="summary"
        style={{
          background: '#ffffff',
          minHeight: '10vh'
        }}
      >
        <Row type="flex" align="left">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <TextWrapper>
              <MarketHeader>Summary</MarketHeader>

              <ContentWrapper>
                Crypto as an asset class is growing quickly with many promising
                projects in a variety of applications, but with rapid progress
                comes challenges. Due to price volatility, crypto assets can’t
                effectively function as a medium of exchange or in token
                applications. This volatility further limits crypto as a store
                of value relative to other digital or traditional assets. Until
                these challenges are addressed, the blockchain space cannot
                achieve scale.
              </ContentWrapper>
              <ContentWrapper>
                MARKET Protocol (“MARKET”) has created the open source
                foundation needed to build decentralized exchanges and conduct
                trading activities on the Ethereum blockchain. As an open-source
                protocol governed by its participants, MARKET Protocol does not
                charge any native fees. It provides the framework enabling
                traders and businesses to buy and sell digital and real-world
                assets in a safe, solvent and trustless marketplace.
              </ContentWrapper>
              <ContentWrapper>
                MARKET Protocol Contracts are an agreement between two or more
                individuals and similar to traditional derivatives which settle
                in the future based on the price of a reference asset. Financial
                derivatives are often used to manage risk, airlines hedge jet
                fuel or banks hedge interest rates. MARKET Protocol enables
                derivatives trading of crypto assets allowing businesses and
                traders to hedge the price volatility associated with these
                assets and is essential for risk mitigation. As derivatives,
                traders can buy or sell with no need to borrow or take custody
                of the underlying assets drastically simplifying trading. Short
                selling is a necessary piece of an efficient marketplace and can
                help reduce overall volatility. MARKET Protocol Contracts also
                enable contracts involving traditional assets like Tesla stock
                (TSLA) which makes relationships like TSLA/ETH or TSLA/DAI
                tradeable without converting to fiat currency or taking custody
                of TSLA.
              </ContentWrapper>
              <ContentWrapper>
                Third party projects can build decentralized applications or
                “dApps” on top of the protocol, enabling non-technical traders
                to easily interact with the underlying blockchain. MARKET
                Protocol is preparing to release the first dApp for public beta,
                which allows users to deploy MARKET Protocol Contracts, test
                oracle queries and explore those created by others.
              </ContentWrapper>
              <ContentWrapper>
                The MARKET Protocol team comes from diverse technical and
                financial backgrounds with over 30 years of cumulative
                electronic trading experience on global exchanges. Co-founders
                Seth Rubin, Phil Elsasser, and Collins Brown have been working
                together since 2011 managing a 24-hour algorithmic trading
                group. These experiences enabled and catalyzed the development
                of MARKET Protocol, an open, trustless, and decentralized
                trading marketplace.
              </ContentWrapper>
            </TextWrapper>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Summary;
