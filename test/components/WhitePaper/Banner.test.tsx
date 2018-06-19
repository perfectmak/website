import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'antd';
import logo_light from '@images/whitepaper/logo_light.svg';
import heroIllustration from '@images/whitepaper/hero_illustration.svg';
import Banner, { SectionWrapper } from '@components/WhitePaper/Banner';

describe('<Banner />', () => {
  it('renders section with minHeight 10vh', () => {
    const component = shallow(<Banner />);
    expect(component.find(SectionWrapper).props().style).to.deep.equal({
      background: '#181e26',
      minHeight: '10vh'
    });
  });

  it('renders one Row component', () => {
    const component = shallow(<Banner />);
    const rowComponent = component.find(Row);
    expect(rowComponent).to.have.length(1);
  });


  it('renders two images', () => {
    const component = shallow(<Banner />);
    const images = component.find('img');
    expect(images).to.have.length(2);
  });


  it('first image renders MarketProtocol image', () => {
    const component = shallow(<Banner />).find('img');
    const imgComponentProps = component.at(0).props();
    expect(imgComponentProps.alt).to.equal('MARKET Protocol white paper');
    expect(imgComponentProps.src).to.equal(logo_light);
  });

  it('first image renders MarketProtocol image', () => {
    const component = shallow(<Banner />).find('img');
    const imgComponentProps = component.at(1).props();
    expect(imgComponentProps.alt).to.equal('MARKET Protocol Ethereum derivatives trading');
    expect(imgComponentProps.src).to.equal(heroIllustration);
  });
});
