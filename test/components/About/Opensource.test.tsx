import React from 'react';
import {shallow} from 'enzyme';
import {Col, Row} from 'antd';
import { Link } from 'react-static';
import protocol from '@images/about/protocol.svg';

import Opensource, {IllustrationContainer1 } from '@components/About/Opensource';
import {SectionWrapper} from "@src/Styles";

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
            .find(IllustrationContainer1)
            .find('img')
            .props();
        expect(firstImage.alt)
            .to
            .equal('Open Source Derivatives Protocol');
        expect(firstImage.src)
            .to
            .equal(protocol)
    })

    it('renders atleast two Row components', () => {
        const component = shallow(<Opensource/>);
        expect(component.find(Row))
            .to
            .have
            .length(1);
    });

    it('renders an Add to Calendar button', () => {
        const component = shallow(<Opensource/>);
        const button = component.find(Link);
        expect(button.at(3).render().text()).to.equal('Add To Calendar');
    });
});
