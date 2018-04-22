import React from 'react';
import {Button, Col, Row} from 'antd';
import styled from 'styled-components';
//
import {MarketText} from '../Styles';
import Protocol from '../images/protocol_illustration.svg';
import {device, size} from "../breakpoints";

const TextWrapper = styled.div`
  padding: 0px 10px;
  
  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 30px 0;
  }
  
  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 0px 30px;
  }
  
  @media ${device.laptop} {
    padding: 0 50px 0 50px;
  }
  
`;

const IllustrationWrapper = styled.div`
  background: #181E26
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 70px
`;

const SectionWrapper = styled.section`
  padding: 50px 20px;
  
  @media ${device.tablet} {
    padding: 30px;
  }
  
  @media ${device.laptop} {
    padding: 70px;
  }
  
`;

class BuildDapp extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <IllustrationWrapper>
              <img alt="tablet" src={Protocol} width="50%" style={{margin: '0 auto'}}/>
            </IllustrationWrapper>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <TextWrapper>
              <MarketText header>Build your dApp on Market Protocol</MarketText>
              <MarketText style={{margin: '40px 0'}}>As a protocol, MARKET enables third parties to build applications for trading, order routing and related activities. The protocol is open source and available under the Apache 2.0 license.</MarketText>
              <Button type="primary" style={{padding: '0 5%', textAlign: 'center', marginTop: '20px', marginRight: '20px'}}><a href="#" target="_blank">Check us out on Github</a></Button>
              <Button type="primary" style={{padding: '0 5%', textAlign: 'center', marginTop: '20px', marginRight: '20px'}}><a href="#" target="_blank">Learn more about us</a></Button>
            </TextWrapper>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}
export default BuildDapp;
