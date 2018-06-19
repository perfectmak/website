import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'antd';
import TableOfContents, { Section } from '@components/WhitePaper/TableOfContents';

describe('<TableOfContents />', () => {
  it('renders section with minHeight 10vh', () => {
    const component = shallow(<TableOfContents />);
    expect(component.find(Section).props().style).to.deep.equal({
      background: '#ffffff',
      minHeight: '10vh'
    });
  });

  it('renders one Row component', () => {
    const component = shallow(<TableOfContents />);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.type).to.equal('flex');
  });

});
