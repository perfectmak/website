import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
//
import {
  MarketHeader,
  MarketList,
  MarketText,
  SectionWrapper
} from '@src/Styles';
import { device, size } from '@src/breakpoints';
import asset3 from '@images/asset_3.svg';
import asset9 from '@images/asset_9.svg';
import asset5 from '@images/asset_5.svg';
import tablet from '@images/tablet.svg';

export const Wrapper = styled.div`
  background-color: #00e2c1;
  padding: 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 420px;
  margin-right: 10px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    margin-right: 0px;
  }
`;

const TextWrapper = styled.div`
  padding: 0px 100px 0px 50px;

  @media ${device.mobileS} {
    padding: 20px 20px 50px 20px;
  }
  @media ${device.tablet} {
    padding: 0px 50px 0px 0px;
  }
  @media ${device.laptop} {
    padding: 0px 50px 0px 30px;
  }
`;

export const HeaderText = MarketHeader.extend`
  padding-bottom: 70px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 70px 20px;
  }
`;

export const ButtonWrapper = styled(Button)`
  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    width: 100%;
  }
`;

const Dapp = () => {
  return (
    <SectionWrapper style={{ background: '#f0f0f0' }}>
      <HeaderText header>Easily create new contracts</HeaderText>
      <Row type="flex" align="middle">
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Wrapper bg="#181E26">
            <img
              alt="ERC20 Collateral Token for trustless trading"
              src={asset3}
            />
            <MarketHeader style={{ fontSize: '18px' }}>Base Token</MarketHeader>
            <MarketText>What ERC20 token is used for collateral?</MarketText>
          </Wrapper>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Wrapper bg="#181E26">
            <img
              alt="Oracle provides external Data to Blockhain"
              src={asset9}
            />
            <MarketHeader style={{ fontSize: '18px' }}>
              Oracle Solution
            </MarketHeader>
            <MarketText>
              Who provides the external data for trade settlement?
            </MarketText>
          </Wrapper>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Wrapper bg="#181E26">
            <img alt="Create derivatives on ethereum" src={asset5} />
            <MarketHeader style={{ fontSize: '18px' }}>
              Reference Asset
            </MarketHeader>
            <MarketText>What is the underlying asset?</MarketText>
          </Wrapper>
        </Col>
      </Row>
      <Row type="flex" align="middle" style={{ marginTop: '10%' }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <TextWrapper>
            <MarketList>
              Users can create contracts with MARKET Protocol’s dApp guiding
              them through the process
            </MarketList>
            <MarketList>
              A contract defines the ERC20 token used as collateral, the oracle
              and the reference asset.
            </MarketList>
            <MarketList>
              Once created, MARKET Protocol contracts are deployed to the
              blockchain allowing trustless, many to many trading
            </MarketList>
            <MarketList>
              Exiting a position is as easy as trading with another user or
              holding the contract until expiration
            </MarketList>
            <ButtonWrapper
              type="primary"
              style={{ padding: '0 5%', marginTop: '20px' }}
            >
              <a href="https://dapp.marketprotocol.io" target="_blank">
                Try out our demo dApp
              </a>
            </ButtonWrapper>
          </TextWrapper>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img
            alt="dApp to short crypto, decentralized derivatives"
            src={tablet}
            width="100%"
          />
        </Col>
      </Row>
    </SectionWrapper>
  );
};
export default Dapp;
