import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import {
  MarketDescriptionText,
  MarketDescriptionWrapper,
  MarketHeader
} from '@src/Styles';

interface Jobs {
  title: string;
  link: string;
}

interface Props {
  list: Jobs[];
}

const MarketSmallText = styled.p`
  font-weight: 100;
`;

class JobList extends Component<Props> {
  render() {
    return (
      <MarketDescriptionWrapper
        id="jobList"
        style={{ background: '#f0f0f0', marginTop: '70px' }}
      >
        <MarketHeader>Open Positions</MarketHeader>
        {this.props.list.map((job, index) => {
          return (
            <Row
              key={index}
              type="flex"
              justify="space-between"
              style={{ marginTop: '50px' }}
            >
              <Col xs={18}>
                <MarketDescriptionText
                  style={{
                    fontWeight: 400,
                    lineHeight: '14px',
                    marginTop: '1em'
                  }}
                >
                  {job.title}
                </MarketDescriptionText>
              </Col>
              <Col xs={6} style={{ textAlign: 'right' }}>
                <a href={job.link} target="_blank">
                  <Button type="primary" style={{ padding: '0 25%' }}>
                    View
                  </Button>
                </a>
              </Col>
            </Row>
          );
        })}
        <MarketSmallText style={{ marginTop: '70px' }}>
          If you have any questions about working at Market Protocol, please
          email us at{' '}
          <a
            href="mailto:jobs@marketprtotocol.com"
            style={{ textDecoration: 'none' }}
          >
            {' '}
            info@marketprotocol.io
          </a>
        </MarketSmallText>
      </MarketDescriptionWrapper>
    );
  }
}

export default JobList;
