import React from 'react';
import { mount } from 'enzyme';
import Page404 from '../src/containers/404';

const expectedValues = {
  h1Text: 'Opus!',
  missingText: 'LOOKS LIKE SOMETHING IS MISSING ...',
  numberOfLinks: 3,
  homepageUrl: 'https://marketprotocol.io/',
  docsUrl: 'https://docs.marketprotocol.io/',
  faqUrl: 'https://docs.marketprotocol.io/#faq-general'
};

describe(`/404 page`, () => {
  it(`should render an h1 with text: "${expectedValues.h1Text}"`, () => {
    const wrapper = mount(<Page404 />);
    expect(
      wrapper
        .find('h1')
        .at(0)
        .text()
    ).toEqual(expectedValues.h1Text);
  });

  it(`should render an h2 with text: "${expectedValues.missingText}"`, () => {
    const wrapper = mount(<Page404 />);
    expect(
      wrapper
        .find('h2')
        .at(0)
        .text()
    ).toEqual(expectedValues.missingText);
  });

  it(`should render ${expectedValues.numberOfLinks} links`, () => {
    const wrapper = mount(<Page404 />);
    expect(wrapper.find('li a').length).toEqual(expectedValues.numberOfLinks);
  });

  it(`should render ${expectedValues.homepageUrl} links`, () => {
    const wrapper = mount(<Page404 />);
    expect(
      wrapper
        .find('li a')
        .at(0)
        .prop('href')
    ).toEqual(expectedValues.homepageUrl);
  });

  it(`should render ${expectedValues.faqUrl} links`, () => {
    const wrapper = mount(<Page404 />);
    expect(
      wrapper
        .find('li a')
        .at(1)
        .prop('href')
    ).toEqual(expectedValues.faqUrl);
  });

  it(`should render ${expectedValues.docsUrl} links`, () => {
    const wrapper = mount(<Page404 />);
    expect(
      wrapper
        .find('li a')
        .at(2)
        .prop('href')
    ).toEqual(expectedValues.docsUrl);
  });
});
