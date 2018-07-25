import React from 'react';
import { shallow } from 'enzyme';
import SocialLinks from '@components/Press/SocialLinks';

describe('<SocialLinks />', () => {
  it('renders without crashing', () => {
    const c = shallow(<SocialLinks />);
    expect(c.exists());
  });

  it('renders a root component', () => {
    const c = shallow(<SocialLinks/>);
    expect(c.find('#root').length).toEqual(1);
  });
});
