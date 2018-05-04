import React from 'react';
import { shallow } from 'enzyme';
import { Button, Col, Row } from 'antd';
import Protocol from '@images/protocol_illustration.svg';
import { MarketText } from '../src/Styles';
import { Link } from 'react-static';

import BuildDapp, {
  IllustrationWrapper,
  SectionWrapper,
  TextWrapper,
  ButtonWrapper
} from '../src/components/BuildDapp';

describe('<BuildDapp />', () => {
  it('renders the SectionWrapper component', () => {
    const component = shallow(<BuildDapp />);
    expect(component.find(SectionWrapper)).to.have.length(1);
  });
  it('renders one Row and two Col components', () => {
    const component = shallow(<BuildDapp />);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
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
      alt: 'tablet',
      src: Protocol,
      width: '50%',
      style: { margin: '0 auto' }
    });
  });

  it('renders TextWrapper and content on second Col component', () => {
    const component = shallow(<BuildDapp />);
    const secondColComponent = component.find(Col).at(1);
    expect(secondColComponent.find(TextWrapper)).to.have.length(1);
    expect(secondColComponent.find(MarketText)).to.have.length(2);
    expect(
      secondColComponent
        .find(MarketText)
        .at(0)
        .render()
        .text()
    ).to.equal('Build your dApp on MARKET Protocol');
    expect(secondColComponent.find(ButtonWrapper)).to.have.length(2);
    const firstLinkProps = secondColComponent
      .find(ButtonWrapper)
      .at(0)
      .find(Link)
      .props();
    const secondLinkComponent = secondColComponent
      .find(ButtonWrapper)
      .at(1)
      .find(Link);
    expect(firstLinkProps.to).to.equal('https://github.com/MARKETProtocol');
    expect(firstLinkProps.target).to.equal('_blank');
    expect(secondLinkComponent.props().to).to.equal('/team');
  });
});
