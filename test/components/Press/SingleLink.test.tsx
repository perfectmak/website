import React from 'react';
import { mount } from 'enzyme';

import SingleLink, { PropsType } from '@components/Press/SingleLink';
import linkInfos from '@containers/Press/config';

describe('<SingleLink />', () => {
  // const mockFocus = jest.fn();
  const linkInfo = linkInfos[0];

  describe('column style', () => {
    const props: PropsType = {
      ...linkInfo,
      displayDirection: 'column'
    };

    const component = mount(<SingleLink {...props}/>);

    it('renders image with <a/> parent and right href', () => {
      const img = component
        .find('img')
        .at(0);
      const imgParent = img.parent();

      expect(imgParent.is('a')).toEqual(true);
      expect(imgParent.props().href).toEqual(linkInfo.link);

      expect(img.props().src).toEqual(linkInfo.imgSrc);
    });

    it('renders title with <a/> parent and right href', () => {
      const title = component
        .find('h2')
        .at(0);
      const titleChild = title.childAt(0);

      expect(titleChild.is('a')).toEqual(true);
      expect(titleChild.props().href).toEqual(linkInfo.link);

      expect(title.text()).toEqual(linkInfo.title);
    });

    it('renders paragraphs', () => {
      component
        .find('p')
        .forEach((p, index) => {
          expect(p.text()).toEqual(linkInfo.paragraphs[index]);

        });
    });

    it('renders readMore', () => {
      const readMore = component.findWhere(node => node.is('a') && node.text() === 'Read more »').at(0);

      expect(readMore.props().href).toEqual(linkInfo.link);
    });

  });

  describe('row style', () => {
    const props: PropsType = {
      ...linkInfo,
      displayDirection: 'row'
    };

    const component = mount(<SingleLink {...props}/>);

    it('renders image with <a/> parent and right href', () => {
      const img = component
        .find('img')
        .at(0);
      const imgParent = img.parent();

      expect(imgParent.is('a')).toEqual(true);
      expect(imgParent.props().href).toEqual(linkInfo.link);

      expect(img.props().src).toEqual(linkInfo.imgSrc);
    });

    it('renders title with <a/> parent and right href', () => {
      const title = component
        .find('h2')
        .at(0);
      const titleChild = title.childAt(0);

      expect(titleChild.is('a')).toEqual(true);
      expect(titleChild.props().href).toEqual(linkInfo.link);

      expect(title.text()).toEqual(linkInfo.title);
    });

    it('renders paragraphs', () => {
      component
        .find('p')
        .forEach((p, index) => {
          expect(p.text()).toEqual(linkInfo.paragraphs[index]);

        });
    });

    it('renders readMore', () => {
      const readMore = component.findWhere(node => node.is('a') && node.text() === 'Read more »').at(0);

      expect(readMore.props().href).toEqual(linkInfo.link);
    });

  });

});
