import React from 'react';
import { shallow } from 'enzyme';
import Problems  from '@components/WhitePaper/Problems';
import { TextWrapper } from "@src/Styles";

describe('<Problems />', () => {
  it('renders one container div component', () => {
    const component = shallow(<Problems />);
    const rowComponent = component.find(TextWrapper);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.id).to.equal('problems');
  });
});
