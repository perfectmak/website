import React from 'react';
import { shallow } from 'enzyme';
import DApps from '@components/WhitePaper/dApps';
import { TextWrapper } from '@src/Styles';

describe('<DApps />', () => {
  it('renders one container div component', () => {
    const component = shallow(<DApps />);
    const rowComponent = component.find(TextWrapper);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.id).to.equal('dapps');
  });
});
