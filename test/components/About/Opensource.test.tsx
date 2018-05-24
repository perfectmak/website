import React from 'react';
import {shallow} from 'enzyme';
import {Col, Row} from 'antd';
import protocol from '@images/about/protocol.svg';

import Opensource, {IllustrationContainer, SectionWrapper} from '@components/About/Opensource';

describe('<Opensource />', () => {
    it('renders SectionWrapper component', () => {
        const component = shallow(<Opensource/>);
        expect(component.find(SectionWrapper))
            .to
            .have
            .length(1);
    });
    it('renders first image with alt as Protocol', () => {
        const component = shallow(<Opensource/>);
        const colComponents = component.find(Col);
        const firstImage = colComponents
            .at(0)
            .find(IllustrationContainer)
            .find('img')
            .props();
        expect(firstImage.alt)
            .to
            .equal('Protocol');
        expect(firstImage.src)
            .to
            .equal(protocol)
    })

    it('renders atleast two Row components', () => {
        const component = shallow(<Opensource/>);
        expect(component.find(Row))
            .to
            .have
            .length(2);
    });
});
