import React from 'react';
import { mount } from 'enzyme';
import Team from '../../../src/containers/Team';
import config from '../../../src/containers/Team/config';

const expectedValues = {
  headerText: 'The Team',
  numberOfTeam: config.teamMembers.length,
  numberOfAdvisors: config.advisors.length
};

describe(`/team page`, () => {
  it('should render a <Team> component without crashing', () => {
    const wrapper = mount(<Team />);
    expect(wrapper.find('Team').length).toBe(1);
  });

  it(`should render an h1 with text: "${expectedValues.headerText}"`, () => {
    const wrapper = mount(<Team />);
    expect(
      wrapper
        .find('h1')
        .at(0)
        .text()
    ).toEqual(expectedValues.headerText);
  });

  it(`should render ${expectedValues.numberOfTeam +
    expectedValues.numberOfAdvisors} <Person> components`, () => {
    const wrapper = mount(<Team />);
    expect(wrapper.find('Person').length).toEqual(
      expectedValues.numberOfTeam + expectedValues.numberOfAdvisors
    );
  });

  it(`should render a single <Cta> component`, () => {
    const wrapper = mount(<Team />);
    expect(wrapper.find('Cta').length).toBe(1);
  });

  // This is the modal that pops up when a team member is clicked
  describe(`<Bio> component`, () => {
    it(`should render a single <Bio> component by default`, () => {
      const wrapper = mount(<Team />);
      expect(wrapper.find('Bio').length).toBe(1);
    });
  });
});
