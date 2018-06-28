import React from 'react';
import { shallow } from 'enzyme';
import About from '@components/Blog/About';

describe('<About />', () => {
  it('renders without crashing', () => {
    const c = shallow(<About />);
    expect(c.exists());
  });

  it('renders a div component', () => {
    const c = shallow(<About />);
    expect(c.find('div').length).toEqual(1);
  });

  it('renders a title', () => {
    const c = shallow(<About />);
    expect(c.find('#title').text()).toEqual('About Our Blog');
  });
});
