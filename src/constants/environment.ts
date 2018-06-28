const EnvironmentConstant = {
  ENVIRONMENTS: {
    PRODUCTION: 'production',
    TEST: 'test'
  },
  PROD: {
    GOOGLE_ANALYTICS: 'UA-114752952-1',
    GOOGLE_TAG_MANAGER: 'GTM-TN3ZVBH',
    URL: 'marketprotocol.io'
  },
  STAGING: {
    GOOGLE_ANALYTICS: 'UA-118445796-1',
    GOOGLE_TAG_MANAGER: 'GTM-WDMKD33',
    URL: 'dev.website.marketprotocol.io'
  },
  getNodeEnv: () => process.env.NODE_ENV
};

export default EnvironmentConstant;
