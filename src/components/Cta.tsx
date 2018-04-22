import React from 'react';
import {Button, Col, Icon, Input, Row} from 'antd';
//
import {MarketText} from '../Styles';
import styled from "styled-components";
import {device} from "../breakpoints";

const SectionWrapper = styled.section`
  background: #F0F0F0;
  
  @media ${device.mobileS} {
    padding: 0 10px 70px 10px;
  }
  
  @media ${device.tablet} {
    padding: 0 50px 70px 50px;
  }
`;

class Cta extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{padding: '0 20px', marginTop: '70px'}}>
            <MarketText style={{fontSize: '24px', marginBottom: '30px'}}>Join our Newsletter</MarketText>
            <Input
              placeholder="Enter your email here"
              suffix={(
                <Button className="search-btn" size="large" type="primary" style={{padding: '0 10px', height: '38px'}}>
                  <Icon type="arrow-right" />
                </Button>
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{padding: '0 20px', marginTop: '70px'}}>
            <MarketText style={{fontSize: '24px', marginBottom: '30px'}}>Become a Partner</MarketText>
            <Input
              placeholder="Email Us"
              suffix={(
                <Button className="search-btn" size="large" type="primary" style={{padding: '0 10px', height: '38px'}}>
                  <Icon type="arrow-right" />
                </Button>
              )}
            />
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}
export default Cta;
