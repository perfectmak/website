import React from 'react';
import styled from 'styled-components';
import { MarketHeader, SectionWrapper } from '@src/Styles';
import { device, size } from '@src/breakpoints';
import mobileTimeline from '@images/about/timeline-mobile.svg';
import timeline from '@images/about/timeline.svg';

export const HeaderText = MarketHeader.extend`
  padding-bottom: 40px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 60px 20px 20px 20px;
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
      <SectionWrapper style={{ background: '#fff' }}>
        <HeaderText>Timeline</HeaderText>
        <Wrapper>
          <ImageWrapper
            className="desktop"
            src={timeline}
            width="100%"
            alt="ICO timeline for token sale"
          />
          <ImageWrapper
            className="mobile"
            src={mobileTimeline}
            width="100%"
            alt="ICO timeline for token sale"
          />
        </Wrapper>
      </SectionWrapper>
    );
  }
}

export default Timeline;
