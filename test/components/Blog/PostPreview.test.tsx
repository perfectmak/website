import React from 'react';
import Moment from 'react-moment';
import { mount } from 'enzyme';
import Category from '@components/Blog/Category';
import PostPreview from '@components/Blog/PostPreview';

describe('<PostPreview />', () => {
  const samplePost = {
    data: {
      title: 'The Title',
      author: 'Mary Jane',
      category: 'Development',
      published_at: '2018-06-09T05:00:00-05:00',
      medium_link: 'http://medium.com/',
      thumbnail: 'path/to/thumbnail',
      slug: 'slug'
    },
    content: 'The content.'
  }

  it('renders without crashing', () => {
    const c = mount(<PostPreview post={samplePost} />);
    expect(c.exists());
  });

  it('renders nothing if post prop is undefined', () => {
    const c = mount(<PostPreview post={undefined} />);
    expect(c.render().text()).toEqual("");
  });

  it('renders the category', () => {
    const c = mount(<PostPreview post={samplePost} />);
    const categoryC = c.children().find('.title').children().find(Category);
    expect(categoryC.render().text()).toEqual(samplePost.data.category);
  });

  it('renders the title', () => {
    const c = mount(<PostPreview post={samplePost} />);
    const titleC = c.children().find('.title').children().find('h2');
    expect(titleC.render().text()).toEqual(samplePost.data.title);
  });

  it('renders the author', () => {
    const c = mount(<PostPreview post={samplePost} />);
    const authorC = c.children().find('.title').children().find('p');
    expect(authorC.render().text()).toEqual(`by ${samplePost.data.author}`);
  });

  it('renders the publish date', () => {
    const c = mount(<PostPreview post={samplePost} />);
    const m = mount(<Moment format={'MMMM Do, YYYY'}>{samplePost.data.published_at}</Moment>);
    const publishDateC = c.children().find('.title').children().find(Moment);
    expect(publishDateC.render().text()).toEqual(m.render().text());
  });

  it('renders the thumbnail', () => {
    const c = mount(<PostPreview post={samplePost} />);
    const thumbnailC = c.children().find('.thumbnail').children().find('img');
    expect(thumbnailC.prop('src')).toEqual(samplePost.data.thumbnail);
  });
});
