import React from 'react';
import { shallow } from 'enzyme';
import TableOfContents from '@components/WhitePaper/TableOfContents';
import { TextWrapper } from "@src/Styles";

describe('<TableOfContents />', () => {
  it('renders one container div component', () => {
    const component = shallow(<TableOfContents />);
    const rowComponent = component.find(TextWrapper);
    expect(rowComponent).to.have.length(1);
  });

});
