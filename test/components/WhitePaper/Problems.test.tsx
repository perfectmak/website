import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'antd';
import Problems, { Section } from '@components/WhitePaper/Problems';

describe('<Problems />', () => {
  it('renders section with minHeight 100vh', () => {
    const component = shallow(<Problems />);
    expect(component.find(Section).props().style).to.deep.equal({
      background: '#ffffff',
      minHeight: '100vh'
    });
  });

  it('renders one Row component', () => {
    const component = shallow(<Problems />);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.type).to.equal('flex');
  });
});
