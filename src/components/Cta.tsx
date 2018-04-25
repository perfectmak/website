import React from 'react';
import {Col, Row} from 'antd';
//

import styled from "styled-components";
import MarketSubscriberForm from "./MarketSubscriberForm";
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
            <MarketSubscriberForm title="Join our Newsletter" hint="Enter your email here" campaignToken="6yWV9" />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{padding: '0 20px', marginTop: '70px'}}>
            <MarketSubscriberForm title="Become a Partner" hint="Email us" campaignToken="6yWV9" />
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}
export default Cta;
