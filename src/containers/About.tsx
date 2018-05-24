import React from 'react';
import { withSiteData } from 'react-static';

import withGAPageView from './GoogleAnalyticsTracker';

import { MarketText } from '@src/Styles';
import { device, size } from '@src/breakpoints';

import Banner from '@components/About/Banner';
import Derivatives from '@components/About/Derivatives';
import Trading from '@components/About/Trading';
import Timeline from '@components/About/Timeline';
import Opensource from '@components/About/Opensource';
import Cta from '@components/Cta';
import styled from 'styled-components';

export const AboutComponent = () => (
  <div>
    <Banner />
    <Derivatives />
    <Trading />
    <Timeline />
    <Opensource />
    <Cta bg="#fff" />
  </div>
);

export default withGAPageView(withSiteData(AboutComponent));
