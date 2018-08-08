import React from 'react';
import { shallow } from 'enzyme';
import MKTContract, { ExampleIllustrationWrapper, IllustrationWrapper } from '@components/WhitePaper/MKTContract';
import { TextWrapper } from '@src/Styles';

describe('<MKTContract />', () => {
  it('renders one container div component', () => {
    const component = shallow(<MKTContract />);
    const rowComponent = component.find(TextWrapper);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.id).to.equal('contract');
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
