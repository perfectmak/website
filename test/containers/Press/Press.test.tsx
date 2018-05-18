import React from 'react';
import { mount } from 'enzyme';
import Press from '@containers/Press';
import linkInfos from '@containers/Press/config';

describe(`/team press`, () => {
  it('should render a <Press /> component without crashing', () => {
    mount(<Press />);
  });

  it(`should render an h1 with text: "The Press"`, () => {
    const wrapper = mount(<Press />);
    expect(
      wrapper
        .find('h1')
        .at(0)
        .text()
    ).toEqual('The Press');
  });

  it(`should render same number of SingleLinks as linkInfos`, () => {
    const wrapper = mount(<Press />);
    expect(wrapper.find('SingleLink').length).toEqual(
      linkInfos.length
    );
  });

  it('should response width change - column style', () => {
    const wrapper = mount(<Press />);
    window.dispatchEvent(new Event('resize', {target: {innerWidth: 500}}))
    setTimeout(() => {
      expect(wrapper.state().displayDirection).toEqual('column');
    }, 600);
    
  }, 1000);

  it('should response width change - row style', () => {
    const wrapper = mount(<Press />);
    window.dispatchEvent(new Event('resize', {target: {innerWidth: 1000}}))

    setTimeout(() => {
      expect(wrapper.state().displayDirection).toEqual('row');
    }, 600);
    
  }, 1000);

  it('should use row displayDirection when windowWidth > 768', () => {
    window.innerWidth = 1000;
    const wrapper = mount(<Press />);
    expect(wrapper.state().displayDirection).toEqual('row');
  });

  it('should use column displayDirection when windowWidth <= 768', () => {
    window.innerWidth = 500;
    const wrapper = mount(<Press />);
    expect(wrapper.state().displayDirection).toEqual('column');
  });

});
