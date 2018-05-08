import React from 'react';
import { shallow } from 'enzyme';
import { Button, Col, Icon, Row } from 'antd';
import MarketSubscriberForm from '@components/MarketSubscriberForm';
import { MarketText } from '@src/Styles';
import EmailConstant from '@constants/email';

import Cta, { SectionWrapper } from '@components/Cta';

describe('<Cta />', () => {
  it('renders SectionWrapper', () => {
    const component = shallow(<Cta />);
    expect(component.find(SectionWrapper)).to.have.length(1);
    expect(component.find(SectionWrapper).props().id).to.equal('subscribe');
  });

  it('renders one Row and two Col components', () => {
    const component = shallow(<Cta />);
    expect(component.find(Row)).to.have.length(1);
    expect(component.find(Col)).to.have.length(2);
  });

  it('renders MarketSubscriberForm on first column', () => {
    const component = shallow(<Cta />);
    const marketSubscriberFormComponent = component.find(MarketSubscriberForm).at(0);
    expect(marketSubscriberFormComponent).to.have.length(1);
  });

  it('renders MarketText and Button on second column', () => {
    const component = shallow(<Cta />);
    const secondColComponent = component.find(Col).at(1);
    expect(
      secondColComponent
        .find(MarketText)
        .render()
        .text()
    ).to.equal('Become a Partner');
    const emailLink = `mailto:${EmailConstant.PARTNERS_EMAIL.email}?subject=${
      EmailConstant.PARTNERS_EMAIL.subject
    }&body=${EmailConstant.PARTNERS_EMAIL.body}`;
    expect(secondColComponent.find(Button).props().href).to.equal(emailLink);
  });
});
