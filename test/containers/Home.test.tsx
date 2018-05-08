import React from 'react';
import { mount, shallow } from 'enzyme';

import Home, { MarketMainText, HomeComponent } from '@containers/Home';

import Hero from '@components/Hero';
import Solution from '@components/Solution';
import Chain from '@components/Chain';
import Dapp from '@components/Dapp';
import BuildDapp from '@components/BuildDapp';
import Cta from '@components/Cta';

describe('<Home />', () => {
  it('renders content', () => {
    const component = mount(<Home />);
    expect(component.getElement()).not.to.be.null;
  });

  it('renders all site components', () => {
    const component = shallow(<HomeComponent />);
    expect(component.find('div')).to.have.length(1);
    expect(component.find(Hero)).to.have.length(1);
    expect(component.find(Solution)).to.have.length(1);
    expect(component.find(Chain)).to.have.length(1);
    expect(component.find(Dapp)).to.have.length(1);
    expect(component.find(BuildDapp)).to.have.length(1);
    expect(component.find(Cta)).to.have.length(1);
  });

  it('renders the MarketMainText with site name', () => {
    const component = shallow(<HomeComponent />);
    expect(component.find(MarketMainText)).to.have.length(1);
    const spanComponent = component.find(MarketMainText).find('span');
    expect(spanComponent).to.have.length(1);
    expect(spanComponent.render().text()).to.equal('MARKET Protocol');
  });
});
