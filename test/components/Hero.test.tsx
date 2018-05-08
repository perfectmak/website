import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'antd';
import heroIllustration from '@images/hero-illustration.svg';
import Hero, { HeroText, HeroArt } from '../../src/components/Hero';

describe('<Hero />', () => {
  it('renders section with minHeight 300px', () => {
    const component = shallow(<Hero />);
    expect(component.find('section').props().style).to.deep.equal({
      background: '#181E26',
      minHeight: '300px'
    });
  });

  it('renders one Row component', () => {
    const component = shallow(<Hero />);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.type).to.equal('flex');
    expect(rowComponentProps.className).to.equal('hero');
    expect(rowComponentProps.align).to.equal('middle');
  });

  it('renders two Col components', () => {
    const component = shallow(<Hero />);
    const colComponents = component.find(Col);
    const firstColComponentProps = colComponents.at(0).props();
    const secondColComponentProps = colComponents.at(1).props();
    expect(colComponents).to.have.length(2);
    expect(firstColComponentProps.xs).to.equal(24);
    expect(firstColComponentProps.md).to.equal(10);
    expect(secondColComponentProps.xs).to.equal(24);
    expect(secondColComponentProps.md).to.equal(14);
  });

  it('renders HeroText with title text', () => {
    const component = shallow(<Hero />);
    expect(
      component
        .find(HeroText)
        .render()
        .text()
    ).to.equal('Powering safe, solvent and trustless trading of any asset.');
  });

  it('renders HeroArt with image', () => {
    const component = shallow(<Hero />);
    const imgComponentProps = component
      .find(HeroArt)
      .find('img')
      .props();
    expect(imgComponentProps.alt).to.equal('hero');
    expect(imgComponentProps.src).to.equal(heroIllustration);
  });
});
