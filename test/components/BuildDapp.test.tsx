import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'antd';
import Protocol from '@images/protocol_illustration.svg';
import { MarketHeader, MarketText } from '@src/Styles';
import { Link } from 'react-static';

import BuildDapp, {
  BuildDappWrapper,
  IllustrationWrapper,
  TextWrapper,
  ButtonWrapper
} from '@components/BuildDapp';

describe('<BuildDapp />', () => {
  it('renders the SectionWrapper component', () => {
    const component = shallow(<BuildDapp />);
    expect(component.find(BuildDappWrapper)).to.have.length(1);
  });
  it('renders one Row and two Col components', () => {
    const component = shallow(<BuildDapp />);
    const rowComponent = component.find(Row);
    const colComponents = rowComponent.find(Col);
    expect(rowComponent).to.have.length(1);
    expect(colComponents).to.have.length(2);
  });
  it('renders img on first Col component', () => {
    const component = shallow(<BuildDapp />);
    const firstColComponent = component.find(Col).at(0);
    const illustrationWrapperComponent = firstColComponent.find(
      IllustrationWrapper
    );
    const imgComponent = illustrationWrapperComponent.find('img');
    expect(illustrationWrapperComponent).to.have.length(1);
    expect(imgComponent).to.have.length(1);
    expect(imgComponent.props()).to.deep.equal({
      alt: 'build dApp ethereum trading',
      src: Protocol,
      width: '50%',
      style: { margin: '0 auto' }
    });
  });

  it('renders TextWrapper and content on second Col component', () => {
    const component = shallow(<BuildDapp />);
    const secondColComponent = component.find(Col).at(1);
    expect(secondColComponent.find(TextWrapper)).to.have.length(1);
    expect(secondColComponent.find(MarketHeader)).to.have.length(1);
    expect(secondColComponent.find(MarketText)).to.have.length(1);
    expect(
      secondColComponent
        .find(MarketHeader)
        .at(0)
        .render()
        .text()
    ).to.equal('Build your dApp on MARKET Protocol');
    expect(secondColComponent.find(Link)).to.have.length(2);
    const firstLinkProps = secondColComponent
      .find(Link)
      .at(0)
      .props();
    const secondLinkComponent = secondColComponent
      .find(Link)
      .at(1)
    expect(firstLinkProps.to).to.equal('https://github.com/MARKETProtocol');
    expect(firstLinkProps.target).to.equal('_blank');
    expect(secondLinkComponent.props().to).to.equal('/partners');
  });
});
