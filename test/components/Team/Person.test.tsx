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
    focus: mockFocus,
    type: 'core'
  };

  it('renders image with src passed as props', () => {
    const component = shallow(<Person {...props} />);
    const imgComponent = component.find('img').at(0);
    expect(imgComponent.props().src).to.equal(props.data.img);
  });

  it('renders readMore with props with bio', () => {
    const component = shallow(<Person {...props} />);
    const imgWrapperComponent = component.find('div').at(1);
    imgWrapperComponent.simulate('click');
    expect(mockFocus.mock.calls).to.have.length(1);
  });

  it('renders readMore when bio', () => {
    const component = shallow(<Person {...props} />);
    const readMore = component.find('#readMore');
    expect(readMore).to.have.length(1);
  });

  it('does not render readMore when no bio', () => {
    props.data.bio = null;
    const component = shallow(<Person {...props} />);
    const readMore = component.find('#readMore');
    expect(readMore).to.have.length(0);
  });

  it('handles no or incorrect props passed', () => {
    props.data.bio = null;
    const component = shallow(<Person {...props} />);
    const imgComponent = component.find('img').at(0);
    expect(imgComponent.props().style.cursor).to.equal('default');
    imgComponent.simulate('click');
    expect(mockFocus.mock.calls).to.have.length(1);
  });
});
