import React from 'react';
import styled from 'styled-components';
import { MarketText } from '@src/Styles';
import { device, size } from '@src/breakpoints';
import MobileTimeline from '@images/about/timeline-mobile.svg';
import timeline from '@images/about/timeline.svg';

export const SectionWrapper = styled.section`
  padding: 50px;
  background: #fff;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 0px;
    margin: 20px 0;
  }
`;

export const HeaderText = MarketText.extend`
  padding-left: 70px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 20px 20px;
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  background: #29323d;
  margin: 20px;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }

  @media ${device.tablet} {
    margin: 0px;
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }

  @media ${device.laptop} {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.img``;
class Timeline extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <HeaderText header>Timeline</HeaderText>
        <Wrapper>
          <ImageWrapper
            className="desktop"
            src={timeline}
            width="100%"
            alt="ICO timeline for token sale"
          />
          <ImageWrapper
            className="mobile"
            src={MobileTimeline}
            width="100%"
            alt="ICO timeline for token sale"
          />
        </Wrapper>
      </SectionWrapper>
    );
  }
}

export default Timeline;
