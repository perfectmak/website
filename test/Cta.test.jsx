import React from 'react';
import { shallow } from 'enzyme';
import { Button, Col, Icon, Row } from 'antd';
import MarketSubscriberForm from '../src/components/MarketSubscriberForm';
import { MarketText } from '../src/Styles';
import EmailConstant from '../src/constants/email';

import Cta, { SectionWrapper } from '../src/components/Cta';

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
    const firstColComponent = component.find(Col).at(0);
    const marketSubscriberFormComponent = firstColComponent.find(
      MarketSubscriberForm
    );
    expect(marketSubscriberFormComponent).to.have.length(1);
    expect(marketSubscriberFormComponent.props()).to.deep.equal({
      title: 'Join our Newsletter',
      hint: 'Enter your email here'
    });
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
