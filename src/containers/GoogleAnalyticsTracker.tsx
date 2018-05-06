import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';
import { RouterProps } from 'react-router';
import { getLocationOrigin } from '../helpers/url';
import EnvironmentConstant from '../constants/environment';

const isClient = typeof window !== 'undefined';
const isProduction =
  EnvironmentConstant.getNodeEnv() ===
  EnvironmentConstant.ENVIRONMENTS.PRODUCTION;

export const initializeGoogleAnalytics = () => {
  const origin = getLocationOrigin();
  if (origin.indexOf(EnvironmentConstant.STAGING.URL) !== -1) {
    GoogleAnalytics.initialize(EnvironmentConstant.STAGING.GOOGLE_ANALYTICS);
  } else if (origin.indexOf(EnvironmentConstant.PROD.URL) !== -1) {
    GoogleAnalytics.initialize(EnvironmentConstant.PROD.GOOGLE_ANALYTICS);
  }
};

export const trackPage = (page: string) => {
  GoogleAnalytics.set({ page });
  GoogleAnalytics.pageview(page);
};

export const initializeTracking = (props: RouterProps) => {
  if (props.history.location) {
    const page = props.history.location.pathname;
    trackPage(page);
  }
};

const withGAPageView = (WrappedComponent: typeof Component) => {
  let gaInitialised = false;

  const HOC = (props: RouterProps) => {
    if (isClient && isProduction) {
      if (!gaInitialised) {
        gaInitialised = true;
        initializeGoogleAnalytics();
      }

      initializeTracking(props);
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withGAPageView;
