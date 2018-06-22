import React from 'react';
import { shallow } from 'enzyme';

import Bio from '@components/Team/Bio';

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

  it('calls unfocus prop event on Esc key', () => {
    const component = shallow(<Bio {...props} />);
    component.instance().onEscKeyPress({ keyCode: 27 });
    expect(mockUnfocus.mock.calls).to.have.length(1);
  });

  it('not call unfocus prop event on other key', () => {
    const component = shallow(<Bio {...props} />);
    component.instance().onEscKeyPress({ keyCode: 66 });
    expect(mockUnfocus.mock.calls).to.have.length(1);
  });

  it('hides modal on clicking background', () => {
    const component = shallow(<Bio {...props} />);
    const backgroundComponent = component.find('div').at(1);
    backgroundComponent.simulate('click');
    expect(mockUnfocus.mock.calls).to.have.length(2);
  });
});
