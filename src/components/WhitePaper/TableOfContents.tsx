import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-static';
import { MarketHeader, TextWrapper } from '@src/Styles';
import { device, size } from '@src/breakpoints';

export const ItemWrapper = styled.p`
  line-height: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

class TableOfContents extends React.Component {
  render() {
    return (
      <TextWrapper style={{ marginTop: '50px' }}>
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
    );
  }
}

export default TableOfContents;
