import React from 'react';
import { shallow } from 'enzyme';
import MKTToken  from '@components/WhitePaper/MKTToken';
import { TextWrapper } from "@src/Styles";

describe('<MKTToken />', () => {
  it('renders one container div component', () => {
    const component = shallow(<MKTToken />);
    const rowComponent = component.find(TextWrapper);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.id).to.equal('mkt');
  });
});
