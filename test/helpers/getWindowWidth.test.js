import getWindowWidth from '../../src/helpers/getWindowWidth';

describe('getWindowWidth Util', () => {
  it('gives window width', () => {
    expect(getWindowWidth()).to.equal(window.innerWidth);
  });
});
