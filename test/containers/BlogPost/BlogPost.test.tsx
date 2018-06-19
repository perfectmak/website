import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-static';
import Moment from 'react-moment';
import Waypoint from 'react-waypoint';
import Markdown from 'react-markdown';
import ProgressBar from '@components/Blog/ProgressBar';
import Category from '@components/Blog/Category';
import BlogPost from '@containers/BlogPost/BlogPost';

describe('<BlogPost />', () => {
  let component = typeof BlogPost;
  let samplePost = {
    data: {
      title: 'Post Title',
      author: 'Mary Jane',
      category: 'The Category',
      published_at: '2018-06-09T05:00:00-05:00',
      medium_link: 'http://medium.com/',
      thumbnail: 'path/to/thumbnail',
      slug: '/slug'
    },
    content: 'The content.'
  }

  beforeEach(() => {
    component = shallow(
      <BlogPost post={samplePost} />
    );
  });

  it('renders without crashing', () => {
    expect(component.exists());
  });

  describe('header', () => {
    it('renders a <ProgressBar />', () => {
      expect(component.find(ProgressBar).length).toEqual(1);
    });

    it('renders the title', () => {
      let observed = {
        title: component.find('.header-wrap').find('#title').first().render().text()
      }

      expect(observed.title).toEqual(samplePost.data.title);
    });

    it('renders twitter/medium links', () => {
      expect(component.find('.header-wrap').find('#links-header').children().length).toEqual(2);
    });
  });

  describe('title section', () => {
    it('renders the category', () => {
      let category = component.find(Category);
      expect(category.length).toEqual(1);
      expect(category.render().text()).toEqual(samplePost.data.category);
    });

    it('renders the title', () => {
      let title = component.find('h1');
      expect(title.render().text()).toEqual(samplePost.data.title);
    });

    it('renders the author and publication date concatenated', () => {
      let expected = {
        author: samplePost.data.author,
        publicationDate: shallow(<Moment format={'MMMM Do, YYYY'}>{samplePost.data.published_at}</Moment>).render().text(),
        divider: ' • '
      }

      let buffer = component.find('h3').render().text().split(expected.divider);
      let observed = {
        author: buffer[0],
        publicationDate: buffer[1]
      }

      expect(expected.author).toEqual(observed.author);
      expect(expected.publicationDate).toEqual(observed.publicationDate);
    });

    it('renders twitter/medium links', () => {
      expect(component.find('#links-body').children().length).toEqual(2);
    });

    it('renders a <Waypoint />', () => {
      expect(component.find(Waypoint).length).toEqual(1);
    });

    it('renders the thumbnail image with correct src prop', () => {
      let thumbnail = component.find('img#thumbnail');
      expect(thumbnail.props().src).toEqual(samplePost.data.thumbnail);
    });

    it('renders the markdown content', () => {
      let markdown = component.find(Markdown);
      expect(markdown.props().source).toEqual(samplePost.content);
    });

    it('renders the afterword with telegram CTA prompt and button', () => {
      let afterword = component.find('div#afterword');
      expect(afterword.find('h2').length).toEqual(1);
      expect(afterword.find(Link).length).toEqual(1);
    });

    it('toggles the visiblity of the <Header /> with showHeader and hideHeader functions', () => {
      let instance = component.instance();
      instance.showHeader();
      expect(component.state().headerIsVisible).toEqual(true);
      instance.hideHeader();
      expect(component.state().headerIsVisible).toEqual(false);
    });

    it('renders the correctly styled twitter/medium links depending on whether they are being rendered in header or body', () => {
      let instance = component.instance();
      let headerLinks = instance.renderSocialButtons('header');
      let bodyLinks = instance.renderSocialButtons('body');
      expect(headerLinks.props.id).toEqual('links-header');
      expect(bodyLinks.props.id).toEqual('links-body');
    });
  });
});
