import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Home, { MarketMainText } from '../src/containers/Home';

import Hero from '@components/Hero';
import Solution from '@components/Solution';
import Chain from '@components/Chain';
import Dapp from '@components/Dapp';
import BuildDapp from '@components/BuildDapp';
import Cta from '@components/Cta';

describe('<Home />', () => {
  it('renders all the child site components', () => {
    const component = mount(<Home />);
    expect(component.getElement()).not.to.be.null;
  });
});
