import React from 'react';
import { mount } from 'enzyme';
import Team from '../src/containers/Team';

it('renders Team page without crash', () => {
  mount(<Team />);
});
