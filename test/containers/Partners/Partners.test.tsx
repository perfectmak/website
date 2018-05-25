import React from 'react';
import { mount } from 'enzyme';
import Partners from '@containers/Partners';
import config from '@containers/Partners/config';
import NewsletterSubscribeBanner from '@components/NewsletterSubscribeBanner';

describe(`/partners Page`, () => {
  it('should render a <Partners /> component without crashing', () => {
    const component = mount(<Partners />);
    expect(component.find(Partners).length).toEqual(1);
  });

  describe('header area', () => {
    it('should render a title', () => {
      const component = mount(<Partners />);
      expect(component.find('.hero h1').length).toEqual(1);
      expect(
        component
          .find('.hero h1')
          .at(0)
          .text()
      ).toContain('Build on top of  MARKET Protocol');
    });

    it('should render some subtext in a p tag', () => {
      const component = mount(<Partners />);
      expect(component.find('.hero p').length).toEqual(1);
    });

    it('should render a hero illustration', () => {
      const component = mount(<Partners />);
      expect(component.find('.hero img').length).toEqual(1);
    });

    it('should render a call to action to "Become a Partner"', () => {
      const component = mount(<Partners />);
      expect(component.find('.hero a').length).toEqual(1);
      expect(
        component
          .find('.hero a')
          .at(0)
          .text()
      ).toContain('Become a Partner');
    });
  });

  describe('body area', () => {
    it('should render all the partners defined in the config', () => {
      const component = mount(<Partners />);
      expect(component.find('.partner-link').length).toEqual(
        config.partnerProjects.length
      );
    });

    it('should render a "Join our mission" section with wtih a CTA', () => {
      const component = mount(<Partners />);
      expect(component.find('.join-cta-banner').length).toEqual(1);
      expect(
        component
          .find('.join-cta-banner h2')
          .at(0)
          .text()
      ).toEqual('Join our mission');
    });

    it('should render a NewsletterSubscribeBanner', () => {
      const component = mount(<Partners />);
      expect(component.find(NewsletterSubscribeBanner).length).toEqual(1);
    });
  });
});
