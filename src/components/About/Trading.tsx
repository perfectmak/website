import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import ethereum_blockchain from '@images/about/ethereum_blockchain.svg';
import { MarketHeader, MarketText, SectionWrapper } from '@src/Styles';
import { device, size } from '@src/breakpoints';

export const TextWrapper = styled.div`
  padding: 0px 10px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 30px 0px 0px 0px;
  }

  @media ${device.tablet} and (max-width: ${size.laptopL}) {
    padding: 0px 30px;
  }

  @media ${device.laptopL} {
    padding: 0px 80px;
  }
`;

export const IllustrationWrapper = styled.div`
  background: #00E2C1
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 70px
  
  img {
    @media ${device.desktopS} {
      width: 80%
    }
  }
  
  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 10px;
  }
`;

const TradingText = MarketText.extend`
  margin: 40px 0px;
  color: #fff;

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    margin: 20px 0px;
  }
`;

const TradingWrapper = SectionWrapper.extend`
  background: #181e26;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 30px;
  }
`;

class Trading extends React.Component {
  render() {
    return (
      <TradingWrapper>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <IllustrationWrapper>
              <img
                width="100%"
                alt="Ethereum Blockchain"
                src={ethereum_blockchain}
                style={{ margin: '0 auto' }}
              />
            </IllustrationWrapper>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <TextWrapper>
              <MarketHeader style={{ color: '#fff' }}>
                Derivatives trading on the Ethereum blockchain
              </MarketHeader>
              <TradingText>
                MARKET Protocol has created the open source foundation needed to
                build decentralized exchanges and conduct trading activities on
                the Ethereum blockchain.
              </TradingText>
              <TradingText>
                As an open-source protocol governed by its participants, MARKET
                Protocol does not charge any native fees.
              </TradingText>
              <TradingText>
                It provides the framework enabling traders and businesses to buy
                and sell digital and real-world assets in a safe, solvent and
                trustless marketplace.
              </TradingText>
            </TextWrapper>
          </Col>
        </Row>
      </TradingWrapper>
    );
  }
}

export default Trading;
