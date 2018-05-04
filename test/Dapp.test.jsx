import React from 'react';
import { shallow } from 'enzyme';
import { Button, Col, Row } from 'antd';
import { MarketList, MarketText } from '../src/Styles';
import asset3 from '@images/asset_3.svg';
import asset9 from '@images/asset_9.svg';
import asset5 from '@images/asset_5.svg';
import tablet from '@images/tablet.svg';

import Dapp, {
  SectionWrapper,
  Wrapper,
  ButtonWrapper,
  HeaderText
} from '../src/components/Dapp';

describe('<Dapp />', () => {
  it('renders SectionWrapper component', () => {
    const component = shallow(<Dapp />);
    expect(component.find(SectionWrapper)).to.have.length(1);
  });

  it('renders a header', () => {
    const component = shallow(<Dapp />);
    expect(
      component
        .find(HeaderText)
        .render()
        .text()
    ).to.equal('Easily create new contracts');
  });

  it('renders two Row components', () => {
    const component = shallow(<Dapp />);
    expect(component.find(Row)).to.have.length(2);
  });

  it('renders 3 columns on first row', () => {
    const component = shallow(<Dapp />);
    const firstRowComponent = component.find(Row).at(0);
    expect(firstRowComponent.find(Col)).to.have.length(3);

    const firstColComponent = firstRowComponent.find(Col).at(0);
    expect(firstColComponent.find(Wrapper).props().bg).to.equal('#181E26');
    expect(firstColComponent.find('img').props()).to.deep.equal({
      alt: 'baseToken',
      src: asset3
    });

    expect(firstColComponent.find(MarketText)).to.have.length(2);
    const secondColComponent = firstRowComponent.find(Col).at(1);
    expect(secondColComponent.find(Wrapper).props().bg).to.equal('#181E26');
    expect(secondColComponent.find('img').props()).to.deep.equal({
      alt: 'baseToken',
      src: asset9
    });
    expect(secondColComponent.find(MarketText)).to.have.length(2);

    const thirdColComponent = firstRowComponent.find(Col).at(2);
    expect(thirdColComponent.find(Wrapper).props().bg).to.equal('#181E26');
    expect(thirdColComponent.find('img').props()).to.deep.equal({
      alt: 'baseToken',
      src: asset5
    });
    expect(thirdColComponent.find(MarketText)).to.have.length(2);
  });

  it('renders two columns on the second row', () => {
    const component = shallow(<Dapp />);
    const firstRowComponent = component.find(Row).at(1);
    expect(firstRowComponent.find(Col)).to.have.length(2);
    const firstColComponent = firstRowComponent.find(Col).at(0);
    expect(firstColComponent.find(MarketList)).to.have.length(4);
    expect(firstColComponent.find('a').props().href).to.equal(
      'https://dapp.marketprotocol.io'
    );
    expect(
      firstColComponent
        .find('a')
        .render()
        .text()
    ).to.equal('Try out our demo dApp');

    const secondColComponent = firstRowComponent.find(Col).at(1);
    expect(secondColComponent.find('img').props().src).to.equal(tablet);
  });
});
