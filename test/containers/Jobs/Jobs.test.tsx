import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Jobs from '@containers/Jobs/Jobs';
import Hero from '@components/Hero';
import JobList from '@components/Jobs/JobList';
import Perks from '@components/Jobs/Perks';
import WithData from '@containers/Jobs/index';
import Cta from '@components/Cta';

describe('<Jobs />', () => {
  let component = typeof Jobs;
  const numPerks = 4;

  beforeEach(() => {
    component = mount(
      <Jobs />
    );
  });

  it('renders without crashing', () => {
    expect(component.exists());
  });

  it('renders a JobList component', () => {
    expect(component.find(JobList).length).toEqual(1);
  });

  it('renders Perks components', () => {
    expect(component.find(Perks).length).toEqual(numPerks);
  });

  it('renders Cta components', () => {
    expect(component.find(Cta).length).toEqual(1);
  });

});

describe('With data', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <WithData />
    );
  });
});
