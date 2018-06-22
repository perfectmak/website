import React from 'react';
import { mount, render } from 'enzyme';
import Team from '@components/WhitePaper/Team/index';
import config from '@components/WhitePaper/Team/config';
import Person from '@components/WhitePaper/Team/Person';
import { Row } from 'antd';

describe('<Team />', () => {
  let component;

  beforeEach(() => {
    component = mount(<Team />);
  });

  it('renders two Row components', () => {
    const rows = component.find(Row);
    const firstRowProps = rows.at(0).props();
    const secondRowProps = rows.at(1).props();
    expect(firstRowProps.type).to.equal('flex');
    expect(secondRowProps.type).to.equal('flex');
  });

  it('renders components for each team member and advisor', () => {
    const count = config.advisors.length + config.teamMembers.length;
    expect(component.find('Person')).to.have.length(count);
  });

});
