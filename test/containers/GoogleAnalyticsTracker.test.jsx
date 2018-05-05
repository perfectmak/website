import React from 'react';
import { shallow } from 'enzyme';
import GoogleAnalytics from 'react-ga';

import withGAPageView from '../../src/containers/GoogleAnalyticsTracker';

describe('Google Analytics Tracker HOC', () => {
  const MockComponent = () => <div />;
  beforeEach(() => {
    GoogleAnalytics.initialize = jest.fn();
    spyOn(GoogleAnalytics, 'initialize');
  });
  it('does not initializes GA if not client or not in production environment', () => {
    const component = withGAPageView(MockComponent);
    expect(GoogleAnalytics.initialize.mock.calls.length).to.equal(0);
  });
});
