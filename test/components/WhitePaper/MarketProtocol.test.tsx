import React from 'react';
import { shallow } from 'enzyme';
import MarketProtocol  from '@components/WhitePaper/MarketProtocol';
import { TextWrapper } from "@src/Styles";

describe('<MarketProtocol />', () => {
  it('renders one container div component', () => {
    const component = shallow(<MarketProtocol />);
    const rowComponent = component.find(TextWrapper);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.id).to.equal('market');
  });

});
