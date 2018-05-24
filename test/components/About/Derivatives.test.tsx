import React from 'react';
import { shallow } from 'enzyme';
import { Button, Col, Row } from 'antd';
import { MarketList, MarketText } from '@src/Styles';
import shortSelling from '@images/about/short_selling.svg';
import hedging from '@images/about/hedging.svg';
import custody_of_assets from '@images/about/custody_of_assets.svg';

import Derivatives, {
  DerivativeWrapper,
  HeaderText,
  Wrapper,
} from '@components/About/Derivatives';

describe('<Derivatives />', () => {
  it('renders DerivativeWrapper component', () => {
    const component = shallow(<Derivatives />);
    expect(component.find(DerivativeWrapper)).to.have.length(1);
  });

  it('renders a header', () => {
    const component = shallow(<Derivatives />);
    expect(
      component
        .find(HeaderText)
        .render()
        .text()
    ).to.equal('How Derivatives can help');
  });

  it('renders atleast one Row component', () => {
    const component = shallow(<Derivatives />);
    expect(component.find(Row)).to.have.length(1);
  });
});
