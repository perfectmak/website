import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
import { device, size } from '@src/breakpoints';
import { MarketText } from '@styledComponents';

interface Props {
  imgURL: string;
  alt: string;
}

export const Wrapper = styled.div`
  background-color: #181e26;
  justify-content: center;
  padding: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${device.tablet} {
    margin-right: 10px;
  }

  @media ${device.mobileS} and (max-width: ${size.tabletL}) {
    margin-bottom: 10px;
    min-height: 290px;
  }

  @media ${device.desktopS} {
    min-height: 300px;
  }
`;
export const ImageContainer = styled.img`
  margin: 0px auto;
  width: 65%;
  margin-bottom: 20px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    width: 50%;
  }
  @media ${device.tablet} and (max-width: ${size.laptop}) {
    width: 100%;
  }
`;

const JobPerksText = MarketText.extend`
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
  font-size: 25px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    font-size: 18px;
  }

  @media ${device.laptop} and (max-width: 1200px) {
    font-size: 18px;
  }
`;

class Perks extends React.Component<Props> {
  render() {
    return (
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <Wrapper>
          <ImageContainer src={this.props.imgURL} alt={this.props.alt} />
          <JobPerksText>{this.props.children}</JobPerksText>
        </Wrapper>
      </Col>
    );
  }
}

export default Perks;
