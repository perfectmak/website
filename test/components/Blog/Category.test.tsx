import React from 'react';
import { shallow } from 'enzyme';
import Category from '@components/Blog/Category';

describe('<Category />', () => {
  it('renders without crashing', () => {
    const c = shallow(<Category cat={'Development'} />);
    expect(c.exists());
  });

  it('renders an h3 component', () => {
    const c = shallow(<Category cat={'Development'} />);
    expect(c.find('h3').length).toEqual(1);
  });

  it('displays the category', () => {
    const cat = 'Development'
    const c = shallow(<Category cat={cat} />);
    expect(c.find('h3').text()).toEqual(cat);
  });

  it('determines its text color based on cat prop', () => {
    const TheTeam = shallow(<Category cat={'The Team'} />);
    const Development = shallow(<Category cat={'Development'} />);
    const CrashCourses = shallow(<Category cat={'Crash Courses'} />);
    const colorMap = {
      'The Team': '#3a4fdf',
      'Development': '#47df5b',
      'Crash Courses': '#b32deb'
    }

    expect(TheTeam.find('h3').props().style.color).toEqual(colorMap['The Team']);
    expect(Development.find('h3').props().style.color).toEqual(colorMap['Development']);
    expect(CrashCourses.find('h3').props().style.color).toEqual(colorMap['Crash Courses']);
  });

  it("invokes onClick prop function on click", () => {
    const mockOnClick = jest.fn();
    const c = shallow(<Category cat={'Development'} onClick={mockOnClick} />);
    c.simulate('click');
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
