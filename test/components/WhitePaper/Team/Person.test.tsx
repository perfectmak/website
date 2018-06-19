import React from 'react';
import { shallow } from 'enzyme';

import Person from '@components/WhitePaper/Team/Person';

describe('<Person />', () => {
  const mockFocus = jest.fn();
  const props = {
    data: {
        bio: 'Seth Bio',
        email: 'trial@gmail.com',
        img: 'member.jpg',
        linkedin: 'https://www.linkedin.com/in/trial',
        name: 'Mock User',
        title: 'Developer',
    },
    focus: mockFocus
  };

  it('renders image with src passed as props', () => {
    const component = shallow(<Person {...props} />);
    const imgComponent = component.find('img').at(0);
    expect(imgComponent.props().className).to.equal('become-opaque-on-hover');
    expect(imgComponent.props().src).to.equal(props.data.img);
  });
});
