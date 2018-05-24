import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import ethereum_blockchain from '@images/about/ethereum_blockchain.svg';
import { MarketText } from '@src/Styles';
import { device, size } from '@src/breakpoints';

export const IllustrationWrapper = styled.div`
  margin: 70px;
  padding: 50px 100px 50px 0px;
  background: #00e2c1;
  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    margin: 50px;
    padding: 10px 0px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    margin: 40px;
    padding: 30px 20px 50px 0px;
  }

  @media ${device.laptop} {
    margin: 70px;
    padding: 30px 10px 30px 0px;
  }
`;

export const TextWrapper = styled.div`
  padding: 0px 60px;
  max-width: 500px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 0px 50px;
    max-width: 700px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 40px;
  }
`;

export const HeaderText = MarketText.extend`
  max-width: 380px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    font-size: 24px;
    max-width: 600px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    font-size: 22px;
    max-width: 380px;
  }

  @media ${device.laptop} {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const AdditionalInfo = styled.h1`
  font-size: 15px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 20px;
  max-width: 340px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 0px 0px;
    max-width: 1000px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 0px;
    font-size: 14px;
    line-height: 18px;
    max-width: 310px;
  }

  @media ${device.laptop} {
    padding: 0px 0px;
    font-size: 15px;
    line-height: 18px;
    max-width: 350px;
  }
`;

class Trading extends React.Component {
  render() {
    return (
      <Row
        style={{
          background: '#181E26'
        }}
        type="flex"
        align="middle"
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <IllustrationWrapper>
            <img
              width="100%"
              alt="Ethereum Blockchain"
              src={ethereum_blockchain}
            />
          </IllustrationWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <TextWrapper>
            <HeaderText
              header
              style={{
                color: '#fff'
              }}
            >
              Derivatives trading on the Ethereum blockchain
            </HeaderText>
            <AdditionalInfo>
              MARKET Protocol (“MARKET”) has created the open source foundation
              needed to build decentralized exchanges and conduct trading
              activities on the Ethereum blockchain.
            </AdditionalInfo>
            <AdditionalInfo>
              As an open-source protocol governed by its participants, MARKET
              Protocol does not charge any native fees.
            </AdditionalInfo>
            <AdditionalInfo>
              It provides the framework enabling traders and businesses to buy
              and sell digital and real-world assets in a safe, solvent and
              trustless marketplace.
            </AdditionalInfo>
          </TextWrapper>
        </Col>
      </Row>
    );
  }
}

export default Trading;
