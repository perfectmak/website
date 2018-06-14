import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'antd';
import MKTToken, { Section } from '@components/WhitePaper/MKTToken';

describe('<MKTToken />', () => {
  it('renders section with minHeight 10vh', () => {
    const component = shallow(<MKTToken />);
    expect(component.find(Section).props().style).to.deep.equal({
      background: '#ffffff',
      minHeight: '10vh'
    });
  });

  it('renders one Row component', () => {
    const component = shallow(<MKTToken />);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.type).to.equal('flex');
  });
});
