import React from 'react';
import { shallow } from 'enzyme';
import Technical, { IllustrationWrapper } from "@components/WhitePaper/Technical";
import { TextWrapper } from '@src/Styles';

describe('<Technical />', () => {
  it('renders one container div component', () => {
    const component = shallow(<Technical />);
    const rowComponent = component.find(TextWrapper);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.id).to.equal('technical');
  });

  it('renders five images', () => {
    const component = shallow(<Technical/>);
    const images = component.find(IllustrationWrapper);
    expect(images)
      .to
      .have
      .length(5);
  });
});
