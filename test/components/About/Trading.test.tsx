import React from 'react';
import {shallow} from 'enzyme';
import {Col, Row} from 'antd';
import ethereum_blockchain from '@images/about/ethereum_blockchain.svg';

import Trading, {IllustrationWrapper, TextWrapper} from '@components/About/Trading';

describe('<Trading />', () => {
    it('renders one Row component', () => {
        const component = shallow(<Trading/>);
        expect(component.find(Row))
            .to
            .have
            .length(1);
    });

    it('renders image', () => {
        const component = shallow(<Trading/>);
        const colComponents = component.find(Col);
        const image = colComponents
            .find(IllustrationWrapper)
            .find('img')
            .props();
        expect(image.alt)
            .to
            .equal('Ethereum Blockchain');
        expect(image.src)
            .to
            .equal(ethereum_blockchain)
    });
});
