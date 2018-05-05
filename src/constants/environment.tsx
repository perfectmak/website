const EnvironmentConstant = {
  ENVIRONMENTS: {
    PRODUCTION: 'production',
    TEST: 'test'
  },
  getNodeEnv: () => process.env.NODE_ENV
};

export default EnvironmentConstant;
