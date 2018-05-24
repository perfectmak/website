import React from 'react';
import { mount, shallow } from 'enzyme';

import About, { AboutComponent } from '@containers/About';

import Banner from '@components/About/Banner';
import Derivatives from '@components/About/Derivatives';
import Trading from '@components/About/Trading';
import Timeline from '@components/About/Timeline';
import Opensource from '@components/About//Opensource';
import Cta from '@components/Cta';

describe('<About />', () => {
  it('renders content', () => {
    const component = mount(<About />);
    expect(component.getElement()).not.to.be.null;
  });

  it('renders all site components', () => {
    const component = shallow(<AboutComponent />);
    expect(component.find('div')).to.have.length(1);
    expect(component.find(Banner)).to.have.length(1);
    expect(component.find(Derivatives)).to.have.length(1);
    expect(component.find(Trading)).to.have.length(1);
    expect(component.find(Timeline)).to.have.length(1);
    expect(component.find(Opensource)).to.have.length(1);
    expect(component.find(Cta)).to.have.length(1);
  });
});
