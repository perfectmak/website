import React from 'react';
import {shallow} from 'enzyme';

import Timeline, {HeaderText, ImageWrapper} from '@components/About/Timeline';
import {SectionWrapper} from "@src/Styles";

describe('<Timeline />', () => {
    it('renders SectionWrapper component', () => {
        const component = shallow(<Timeline/>);
        expect(component.find(SectionWrapper))
            .to
            .have
            .length(1);
    });

    it('renders a header', () => {
        const component = shallow(<Timeline/>);
        expect(component.find(HeaderText).render().text())
            .to
            .equal('Timeline');
    });

    it('renders two timeline images', () => {
        const component = shallow(<Timeline/>);
        // const colComponents = component.find(Wrapper);
        expect(component.find(ImageWrapper))
            .to
            .have
            .length(2);
    });
});
