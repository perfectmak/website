import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'antd';
import { MarketList, MarketText } from '../src/Styles';
import chain1 from '@images/chain1.svg';
import chain2 from '@images/chain2.svg';
import asset4 from '@images/asset_4.svg';
import asset7 from '@images/asset_7.svg';
import asset8 from '@images/asset_8.svg';
import asset10 from '@images/asset_10.svg';

import Chain, { Wrapper, ChainIllustration } from '../src/components/Chain';

describe('<Chain />', () => {
  it('renders section', () => {
    const component = shallow(<Chain />);
    const sectionComponent = component.find('section');
    expect(sectionComponent).to.have.length(1);
    expect(sectionComponent.props().id).to.equal('chains');
  });

  it('renders 3 Row components', () => {
    const component = shallow(<Chain />);
    expect(component.find(Row)).to.have.length(3);
  });

  it('renders three Col components on first Row', () => {
    const component = shallow(<Chain />);
    const firstRowComponent = component.find(Row).at(0);
    expect(firstRowComponent.find(Col)).to.have.length(3);
    const firstColComponent = firstRowComponent.find(Col).at(0);
    const secondColComponent = firstRowComponent.find(Col).at(1);
    const thirdColComponent = firstRowComponent.find(Col).at(2);
    expect(firstColComponent.find(Wrapper).props().bg).to.equal('#fff');
    expect(
      firstColComponent
        .find(MarketText)
        .render()
        .text()
    ).to.equal('On-chain');
    expect(firstColComponent.find(MarketList)).to.have.length(2);
    expect(secondColComponent.find(Wrapper).props().bg).to.equal('#181E26');
    expect(
      secondColComponent
        .find(MarketText)
        .render()
        .text()
    ).to.equal('Volatile');
    expect(secondColComponent.find('img').props().src).to.equal(chain1);
    expect(secondColComponent.find('img').props().alt).to.equal('exchange');
    expect(thirdColComponent.find(Wrapper).props().bg).to.equal('#00E2C1');
    expect(thirdColComponent.find('img').props().src).to.equal(chain2);
    expect(thirdColComponent.find('img').props().alt).to.equal('exchange');
    expect(
      thirdColComponent
        .find(MarketText)
        .render()
        .text()
    ).to.equal('Predictable');
  });

  it('renders three Col components on second Row', () => {
    const component = shallow(<Chain />);
    const secondRowComponent = component.find(Row).at(1);
    expect(secondRowComponent.find(Col)).to.have.length(3);
    const firstColComponent = secondRowComponent.find(Col).at(0);
    const secondColComponent = secondRowComponent.find(Col).at(1);
    const thirdColComponent = secondRowComponent.find(Col).at(2);
    expect(firstColComponent.find(Wrapper).props().bg).to.equal('#fff');
    expect(
      firstColComponent
        .find(MarketText)
        .render()
        .text()
    ).to.equal('Cross-chain');
    expect(firstColComponent.find(MarketList)).to.have.length(2);
    expect(secondColComponent.find(Wrapper).props().bg).to.equal('#181E26');
    expect(secondColComponent.find(ChainIllustration).props().src).to.equal(
      asset10
    );
    expect(secondColComponent.find(ChainIllustration).props().alt).to.equal(
      'bitcoin'
    );
    expect(thirdColComponent.find(Wrapper).props().bg).to.equal('#00E2C1');
    expect(thirdColComponent.find(ChainIllustration).props().src).to.equal(
      asset8
    );
    expect(thirdColComponent.find(ChainIllustration).props().alt).to.equal(
      'etherium'
    );
  });

  it('renders three Col components on third Row', () => {
    const component = shallow(<Chain />);
    const thirdRowComponent = component.find(Row).at(2);
    expect(thirdRowComponent.find(Col)).to.have.length(3);
    const firstColComponent = thirdRowComponent.find(Col).at(0);
    const secondColComponent = thirdRowComponent.find(Col).at(1);
    const thirdColComponent = thirdRowComponent.find(Col).at(2);
    expect(firstColComponent.find(Wrapper).props().bg).to.equal('#fff');
    expect(
      firstColComponent
        .find(MarketText)
        .render()
        .text()
    ).to.equal('Off-chain');
    expect(firstColComponent.find(MarketList)).to.have.length(1);
    expect(secondColComponent.find(Wrapper).props().bg).to.equal('#181E26');
    expect(secondColComponent.find(ChainIllustration).props().src).to.equal(
      asset4
    );
    expect(secondColComponent.find(ChainIllustration).props().alt).to.equal(
      'tether'
    );
    expect(thirdColComponent.find(Wrapper).props().bg).to.equal('#00E2C1');
    expect(thirdColComponent.find(ChainIllustration).props().src).to.equal(
      asset7
    );
    expect(thirdColComponent.find(ChainIllustration).props().alt).to.equal(
      'aapl'
    );
  });
});
