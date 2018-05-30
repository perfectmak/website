import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'antd';
import asset1 from '@images/asset_1.svg';
import asset2 from '@images/asset_2.svg';
import { MarketList, MarketHeader, SectionWrapper } from '@src/Styles';

import Solution from '@components/Solution';

describe('<Solution />', () => {
  it('renders SectionWrapper', () => {
    const component = shallow(<Solution />);
    expect(component.find(SectionWrapper)).to.have.length(1);
  });

  it('renders one row and four columns', () => {
    const component = shallow(<Solution />);
    expect(component.find(Row)).to.have.length(1);
    expect(component.find(Col)).to.have.length(4);
  });

  it('renders image on first column', () => {
    const component = shallow(<Solution />);
    const imgComponentProps = component
      .find(Col)
      .at(0)
      .find('img')
      .props();
    expect(imgComponentProps.alt).to.equal('decentralized derivative exchange');
    expect(imgComponentProps.src).to.equal(asset1);
  });

  it('renders one MarketHeader and four MarketList components on second column', () => {
    const component = shallow(<Solution />);
    const colComponent = component.find(Col).at(1);
    expect(
      colComponent
        .find(MarketHeader)
        .render()
        .text()
    ).to.equal('Issues with current exchanges');
    expect(colComponent.find(MarketHeader)).to.have.length(1);
    expect(colComponent.find(MarketList)).to.have.length(4);
  });

  it('renders image on third column', () => {
    const component = shallow(<Solution />);
    const imgComponentProps = component
      .find(Col)
      .at(2)
      .find('img')
      .props();
    expect(imgComponentProps.alt).to.equal('short cryptocurrency');
    expect(imgComponentProps.src).to.equal(asset2);
  });

  it('renders one MarketHeader and three MarketList components on fourth column', () => {
    const component = shallow(<Solution />);
    const colComponent = component.find(Col).at(3);
    expect(
      colComponent
        .find(MarketHeader)
        .render()
        .text()
    ).to.equal('How we solve these issues');
    expect(colComponent.find(MarketHeader)).to.have.length(1);
    expect(colComponent.find(MarketList)).to.have.length(3);
  });
});
