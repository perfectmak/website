import React from 'react';
import { shallow } from 'enzyme';

import Person from '@components/Team/Person';

describe('<Person />', () => {
  const mockFocus = jest.fn();
  const props = {
    data: {
      name: 'Mock User',
      title: 'Developer',
      img: 'member.jpg',
      email: 'trial@gmail.com',
      linkedin: 'https://www.linkedin.com/in/trial',
      bio: 'Seth Bio'
    },
    focus: mockFocus
  };

  it('renders image with src passed as props', () => {
    const component = shallow(<Person {...props} />);
    const imgComponent = component.find('img').at(0);
    expect(imgComponent.props().className).to.equal('become-opaque-on-hover');
    expect(imgComponent.props().src).to.equal(props.data.img);
    imgComponent.simulate('click');
    expect(mockFocus.mock.calls).to.have.length(1);
  });

  it('handles no or incorrect props passed', () => {
    props.data.bio = null;
    const component = shallow(<Person {...props} />);
    const imgComponent = component.find('img').at(0);
    expect(imgComponent.props().className).to.equal('');
    expect(imgComponent.props().style.cursor).to.equal('default');
    imgComponent.simulate('click');
    expect(mockFocus.mock.calls).to.have.length(1);
  });
});
