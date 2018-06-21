import React from 'react';
import { shallow } from 'enzyme';
import RecentTweets from '@components/Blog/RecentTweets';

describe('<RecentTweets />', () => {
  it('renders without crashing', () => {
    const c = shallow(<RecentTweets />);
    expect(c.exists());
  });

  it('renders a root component', () => {
    const c = shallow(<RecentTweets />);
    expect(c.find('#root').length).toEqual(1);
  });
});
