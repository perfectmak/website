import React from 'react';
import { mount } from 'enzyme';
import { Form, Input } from 'antd';

import NewsletterSubscribeBanner, {
  StyledCol,
  SectionTitle,
  LearnAboutTeamWrapper
} from '@components/NewsletterSubscribeBanner';
import { emailLink } from '@components/Cta';

import SocialLinks from '@components/SocialLinks';

describe('<NewsletterSubscribeBanner />', () => {
  const getFieldDecoratorMock = jest.fn();

  it('renders without crashing', () => {
    const component = mount(<NewsletterSubscribeBanner />);
    expect(component.find('NewsletterSubscribeBannerComponent').length).toEqual(
      1
    );
  });

  describe('layout', () => {
    it('renders 2 StyledCol', () => {
      const component = mount(<NewsletterSubscribeBanner />);
      expect(component.find(StyledCol).length).toBe(2);
    });

    it("renders 2 SectionTitle's with the correct text", () => {
      const component = mount(<NewsletterSubscribeBanner />);
      expect(component.find(SectionTitle).length).toBe(2);
      expect(
        component
          .find(SectionTitle)
          .at(0)
          .text()
      ).toEqual('Join our Newsletter');
      expect(
        component
          .find(SectionTitle)
          .at(1)
          .text()
      ).toEqual('Learn more about our team');
    });
  });

  describe('Newsletter signup form', () => {
    it('renders a Form with the correct action url', () => {
      const component = mount(<NewsletterSubscribeBanner />);
      expect(component.find(Form).length).toBe(1);
      expect(
        component
          .find(Form)
          .at(0)
          .props().action
      ).toEqual('https://marketprotocol.us17.list-manage.com/subscribe/post');
    });

    it('renders a text Input', () => {
      const component = mount(<NewsletterSubscribeBanner />);
      expect(component.find(Form).find(Input).length).toBe(1);
      expect(
        component
          .find(Form)
          .find(Input)
          .at(0)
          .props().type
      ).toEqual('email');
    });

    it('indicates an email error', () => {
      const component = mount(<NewsletterSubscribeBanner />);
      component.find('form').simulate('submit');
      expect(
        component
          .find('.ant-form-explain')
          .last()
          .text()
      ).toEqual('Please input an Email!');
    });
  });

  describe('Become a Partner email link', () => {
    const component = mount(<NewsletterSubscribeBanner />);
    expect(component.find(LearnAboutTeamWrapper).find('a').length).toBe(1);
    expect(
      component
        .find(LearnAboutTeamWrapper)
        .find('a')
        .props().href
    ).toEqual('/team');
  });
});
