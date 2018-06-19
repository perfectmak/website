import React from 'react';
import { mount, shallow } from 'enzyme';
import { Row } from 'antd';

import Whitepaper, { WhitePaperComponent, Wrapper } from '@containers/WhitePaper';

import Banner from '@components/WhitePaper/Banner';
import dApps from '@components/WhitePaper/dApps';
import MarketProtocol from '@components/WhitePaper/MarketProtocol';
import MKTContract from '@components/WhitePaper/MKTContract';
import Problems from '@components/WhitePaper/Problems';
import Summary from '@components/WhitePaper/Summary';
import TableOfContents from '@components/WhitePaper/TableOfContents';
import Technical from '@components/WhitePaper/Technical';

describe('<WhitePaperComponent />', () => {
    it('renders content', () => {
        const component = mount(<Whitepaper />);
        expect(component.getElement()).not.to.be.null;
    });

    it('renders all site components', () => {
        const component = shallow(<WhitePaperComponent />);
        expect(component.find(Row)).to.have.length(1);
        expect(component.find(Wrapper)).to.have.length(1);
        expect(component.find(Banner)).to.have.length(1);
        expect(component.find(dApps)).to.have.length(1);
        expect(component.find(MarketProtocol)).to.have.length(1);
        expect(component.find(MKTContract)).to.have.length(1);
        expect(component.find(Problems)).to.have.length(1);
        expect(component.find(Summary)).to.have.length(1);
        expect(component.find(TableOfContents)).to.have.length(1);
        expect(component.find(Technical)).to.have.length(1);
    })
});