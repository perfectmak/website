import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'antd';
import {SectionWrapper} from "@src/Styles";

import Derivatives, {
  HeaderText,
} from '@components/About/Derivatives';


describe('<Derivatives />', () => {
  it('renders DerivativeWrapper component', () => {
    const component = shallow(<Derivatives />);
    expect(component.find(SectionWrapper)).to.have.length(1);
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
