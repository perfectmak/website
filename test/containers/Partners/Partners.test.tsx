import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import Partners from '@containers/Partners';
import config from '@containers/Partners/config';
import NewsletterSubscribeBanner from '@components/NewsletterSubscribeBanner';
import Hero from "@src/components/Partners/Hero";

describe(`/partners Page`, () => {
  let component: typeof Partners;

  beforeEach(() => {
    component = mount(
      <MemoryRouter><Partners /></MemoryRouter>
    );
  });

  it('should render a <Partners /> component without crashing', () => {
    expect(component.find(Partners).length).toEqual(1);
    expect(component.find(Hero).length).toEqual(1);
  });

  describe('body area', () => {
    it('should render all the partners defined in the config', () => {
      expect(component.find('.partner-link').length).toEqual(
        config.partnerProjects.length
      );
    });

    it('should render a "Join our mission" section with wtih a CTA', () => {
      expect(component.find('.join-cta-banner').length).toEqual(1);
      expect(
        component
          .find('.join-cta-banner h2')
          .at(0)
          .text()
      ).toEqual('Join our mission');
    });

    it('should render a NewsletterSubscribeBanner', () => {
      expect(component.find(NewsletterSubscribeBanner).length).toEqual(1);
    });
  });
});
