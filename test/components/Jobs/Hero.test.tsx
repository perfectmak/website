import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'antd';
import header from '@images/partners/partners-hero.svg';
import Hero, { HeroArt } from '@components/Jobs/Hero';
import { HeroText } from '@src/Styles';

describe('<Hero />', () => {
  it('renders section with minHeight 300px', () => {
    const component = shallow(<Hero />);
    expect(component.find('section').props().style).to.deep.equal({
      background: '#181E26',
      minHeight: '300px'
    });
  });

  it('renders two Col components', () => {
    const component = shallow(<Hero />);
    const colComponents = component.find(Col);
    const firstColComponentProps = colComponents.at(0).props();
    const secondColComponentProps = colComponents.at(1).props();
    expect(colComponents).to.have.length(2);
    expect(firstColComponentProps.xs).to.equal(24);
    expect(secondColComponentProps.md).to.equal(10);
  });

  it('renders HeroText with title text', () => {
    const component = shallow(<Hero />);
    expect(
      component
        .find(HeroText)
        .render()
        .text()
    ).to.equal('Jobs');
  });

  it('renders HeroArt with image', () => {
    const component = shallow(<Hero />);
    const imgComponentProps = component
      .find(HeroArt)
      .find('img')
      .props();
    expect(imgComponentProps.alt).to.equal('MARKET Protocol jobs');
    expect(imgComponentProps.src).to.equal(header);
  });
});
