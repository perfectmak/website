import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'antd';
import MKTContract, {Section, ExampleIllustrationWrapper, IllustrationWrapper} from '@components/WhitePaper/MKTContract';

describe('<MKTContract />', () => {
  it('renders section with minHeight 100vh', () => {
    const component = shallow(<MKTContract />);
    expect(component.find(Section).props().style).to.deep.equal({
      background: '#ffffff',
      minHeight: '100vh'
    });
  });

  it('renders one Row component', () => {
    const component = shallow(<MKTContract />);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.type).to.equal('flex');
  });

  it('renders five ExampleIllustrationWrapper', () => {
    const component = shallow(<MKTContract />);
    const images = component.find(ExampleIllustrationWrapper);
    expect(images).to.have.length(5);
  });

  it('renders six IllustrationWrapper', () => {
    const component = shallow(<MKTContract />);
    const images = component.find(IllustrationWrapper);
    expect(images).to.have.length(6);
  });

});
