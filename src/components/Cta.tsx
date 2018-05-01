import React from 'react';
import { Button, Col, Form, Icon, Input, Modal, Row } from 'antd';

import styled from 'styled-components';
import MarketSubscriberForm from '@components/MarketSubscriberForm';
import { MarketText } from '@styledComponents';
import { device } from '@src/breakpoints';

const SectionWrapper = styled.section`
  background: #f0f0f0;

  @media ${device.mobileS} {
    padding: 0 10px 70px 10px;
  }

  @media ${device.tablet} {
    padding: 0 50px 70px 50px;
  }
`;

// encoded
const PartnersEmail = {
  body:
    'Please%20explain%20your%20company%20and%20your%20interest%20' +
    'in%20the%20protocol%20as%20well%20as%20any%20other%20helpful%20details.',
  email: 'partnerships@marketprotocol.io',
  subject: 'Partnership%20with%20MARKET%20Protocol'
};

class Cta extends React.Component {
  state = {
    subscriptionPopUpAlertVisiable: false,
    subscriptionPopUpInputData: {},
    subscriptionPopUpVisible: false
  };

  render() {
    const {
      subscriptionPopUpVisible,
      subscriptionPopUpInputData,
      subscriptionPopUpAlertVisiable
    } = this.state;
    return (
      <SectionWrapper id="subscribe">
        <MarketSubscriberForm
          alertVisiable={subscriptionPopUpAlertVisiable}
          onCancel={() => this.setState({ subscriptionPopUpVisible: false })}
          visible={subscriptionPopUpVisible}
        />
        <Row type="flex" align="middle">
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{ padding: '0 20px', marginTop: '40px' }}
          >
            <MarketText style={{ fontSize: '24px', marginBottom: '30px' }}>
              Join our Newsletter
            </MarketText>
            <Button
              onClick={() => this.setState({ subscriptionPopUpVisible: true })}
              type="primary"
              style={{ width: '100%', textAlign: 'left' }}
            >
              Join Us{' '}
              <Icon
                type="arrow-right"
                style={{ position: 'absolute', top: '35%', right: '15px' }}
              />
            </Button>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{ padding: '0 20px', marginTop: '40px' }}
          >
            <MarketText style={{ fontSize: '24px', marginBottom: '30px' }}>
              Become a Partner
            </MarketText>
            <Button
              href={`mailto:${PartnersEmail.email}?subject=${
                PartnersEmail.subject
              }&body=${PartnersEmail.body}`}
              type="primary"
              style={{ width: '100%', textAlign: 'left' }}
            >
              Email Us{' '}
              <Icon
                type="arrow-right"
                style={{ position: 'absolute', top: '35%', right: '15px' }}
              />
            </Button>
          </Col>
        </Row>
      </SectionWrapper>
    );
  }
}
export default Cta;
