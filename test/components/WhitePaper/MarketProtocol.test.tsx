import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'antd';
import MarketProtocol, { Section } from '@components/WhitePaper/MarketProtocol';

describe('<MarketProtocol />', () => {
  it('renders section with minHeight 100vh', () => {
    const component = shallow(<MarketProtocol />);
    expect(component.find(Section).props().style).to.deep.equal({
      background: '#ffffff',
      minHeight: '100vh'
    });
  });

  it('renders one Row component', () => {
    const component = shallow(<MarketProtocol />);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.type).to.equal('flex');
  });

});
