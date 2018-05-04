import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';
import { RouterProps } from 'react-router';

const isClient = typeof window !== 'undefined';
const isProduction = process.env.NODE_ENV === 'production';

const withGAPageView = (WrappedComponent: typeof Component) => {
  let gaInitialised = false;

  const trackPage = (page: string) => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };

  const HOC = (props: RouterProps) => {
    if (isClient && isProduction) {
      if (!gaInitialised) {
        const origin = window.location.origin;

        gaInitialised = true;

        if (origin.indexOf('dev.website.marketprotocol.io') !== -1) {
          GoogleAnalytics.initialize('UA-118445796-1');
        } else if (origin.indexOf('marketprotocol.io') !== -1) {
          GoogleAnalytics.initialize('UA-114752952-1');
        }
      }

      if (props.history.location) {
        const page = props.history.location.pathname;
        trackPage(page);
      }
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withGAPageView;
