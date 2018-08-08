import React from 'react';
import { shallow } from 'enzyme';
import Summary  from '@components/WhitePaper/Summary';
import { TextWrapper } from "@src/Styles";

describe('<Summary />', () => {
  it('renders one container div component', () => {
    const component = shallow(<Summary />);
    const rowComponent = component.find(TextWrapper);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.id).to.equal('summary');
  });

});
