import React from 'react';
import { shallow } from 'enzyme';

import Bio from '../../../src/components/Team/Bio';

describe('<Bio />', () => {
  const mockUnfocus = jest.fn();
  const props = {
    data: {
      name: 'Mock User',
      title: 'Developer',
      img: 'member.jpg',
      email: 'trial@gmail.com',
      linkedin: 'https://www.linkedin.com/in/trial',
      bio: 'Seth Bio'
    },
    unfocus: mockUnfocus
  };

  it('hides modal on clicking background', () => {
    const component = shallow(<Bio {...props} />);
    const backgroundComponent = component.find('div').at(1);
    backgroundComponent.simulate('click');
    expect(mockUnfocus.mock.calls).to.have.length(1);
  });
});
