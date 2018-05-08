import React from 'react';
import { shallow } from 'enzyme';
import GoogleAnalytics from 'react-ga';

import withGAPageView, {
  getLocation,
  initializeGoogleAnalytics,
  trackPage,
  initializeTracking
} from '@containers/GoogleAnalyticsTracker';

import * as GoogleAnalyticsTracker from '@containers/GoogleAnalyticsTracker';

import * as urlHelper from '@helpers/url';

import EnvironmentConstant from '@constants/environment';

describe('Google Analytics Tracker HOC', () => {
  const MockComponent = () => <div />;
  beforeEach(() => {
    GoogleAnalytics.initialize = jest.fn();
    GoogleAnalytics.set = jest.fn();
    GoogleAnalytics.pageview = jest.fn();
  });

  it('does not initializes GA if not client or not in production environment', () => {
    const component = withGAPageView(MockComponent);
    expect(GoogleAnalytics.initialize.mock.calls.length).to.equal(0);
  });

  describe('initializeGoogleAnalytics', () => {
    it('initialize google analytics with production GA key if url is production', () => {
      spyOn(urlHelper, 'getLocationOrigin').and.returnValue(
        EnvironmentConstant.PROD.URL
      );
      initializeGoogleAnalytics();
      expect(GoogleAnalytics.initialize.mock.calls.length).to.equal(1);
      expect(GoogleAnalytics.initialize.mock.calls[0][0]).to.equal(
        EnvironmentConstant.PROD.GOOGLE_ANALYTICS
      );
    });

    it('initialize google analytics with staging GA key if url is production', () => {
      spyOn(urlHelper, 'getLocationOrigin').and.returnValue(
        EnvironmentConstant.STAGING.URL
      );
      initializeGoogleAnalytics();
      expect(GoogleAnalytics.initialize.mock.calls.length).to.equal(1);
      expect(GoogleAnalytics.initialize.mock.calls[0][0]).to.equal(
        EnvironmentConstant.STAGING.GOOGLE_ANALYTICS
      );
    });
  });

  describe('trackPage', () => {
    beforeEach(() => {});
    it('calls set and pageview of Google analytics', () => {
      trackPage('trial.com');
      expect(GoogleAnalytics.set.mock.calls[0][0]).to.deep.equal({
        page: 'trial.com'
      });
      expect(GoogleAnalytics.pageview.mock.calls[0][0]).to.equal('trial.com');
    });
  });

  describe('initializeTracking', () => {
    it('calls trackPage with location', () => {
      initializeTracking({
        history: {
          location: {
            pathname: 'mock.com'
          }
        }
      });
      expect(GoogleAnalytics.set.mock.calls[0][0]).to.deep.equal({
        page: 'mock.com'
      });
    });
  });
});
