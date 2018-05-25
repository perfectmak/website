import React from 'react';
import { mount, shallow } from 'enzyme';
import Team, { TeamComponent } from '@containers/Team';
import config from '@containers/Team/config';

const expectedValues = {
  headerText: 'The Team',
  numberOfTeam: config.teamMembers.length,
  numberOfAdvisors: config.advisors.length
};

describe(`/team page`, () => {
  it('should render a <Team> component without crashing', () => {
    const wrapper = mount(<Team />);
    expect(wrapper.find('TeamComponent').length).toBe(1);
  });

  it(`should render an h1 with text: "${expectedValues.headerText}"`, () => {
    const wrapper = mount(<Team />);
    expect(
      wrapper
        .find('h2')
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

  it('sets focusedPerson on focusPerson method', () => {
    const component = shallow(<TeamComponent />);
    expect(component.state().bioIsVisible).to.be.false;
    expect(component.state().focusedPerson).to.be.null;
    const componentInstance = component.instance();
    const mockPerson = {
      name: 'Mock User',
      title: 'Developer',
      img: 'member.jpg',
      email: 'trial@gmail.com',
      linkedin: 'https://www.linkedin.com/in/trial',
      bio: 'Seth Bio'
    };
    componentInstance.focusPerson(mockPerson);
    expect(component.state().focusedPerson).to.equal(mockPerson);
    expect(component.state().bioIsVisible).to.be.true;
  });

  it('sets focusedPerson asnull on unfocusPerson method', () => {
    jest.useFakeTimers();
    const component = shallow(<TeamComponent />);

    component.setState({
      bioIsVisible: true,
      focusedPerson: { name: 'mock' }
    });

    const componentInstance = component.instance();
    const mockPerson = {
      name: 'Mock User',
      title: 'Developer',
      img: 'member.jpg',
      email: 'trial@gmail.com',
      linkedin: 'https://www.linkedin.com/in/trial',
      bio: 'Seth Bio'
    };
    componentInstance.unfocusPerson();
    jest.runAllTimers();
    expect(component.state().bioIsVisible).to.be.false;
    expect(component.state().focusedPerson).to.be.null;
    jest.useRealTimers();
  });

  // This is the modal that pops up when a team member is clicked
  describe(`<Bio> component`, () => {
    it(`should render a single <Bio> component by default`, () => {
      const wrapper = mount(<Team />);
      expect(wrapper.find('Bio').length).toBe(1);
    });
  });
});
