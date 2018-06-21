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
    const categoryC = c.children().find('#blogStatsCategory');
    expect(categoryC.render().text()).toEqual(samplePost.data.category);
  });

  it('renders the title', () => {
    const c = mount(<PostPreview post={samplePost} />);
    const titleC = c.children().find('#blogTitle');
    expect(titleC.render().text()).toEqual(samplePost.data.title);
  });

  it('renders the publish date', () => {
    const c = mount(<PostPreview post={samplePost} />);
    const m = mount(<Moment format={'MMMM D, YYYY'}>{samplePost.data.published_at}</Moment>);
    const publishDateC = c.children().find('#blogStatsTime');
    expect(publishDateC.render().text()).toEqual(m.render().text());
  });

  it('renders the thumbnail', () => {
    const c = mount(<PostPreview post={samplePost} />);
    const thumbnailC = c.children().find('#blogImage');
    expect(thumbnailC.prop('style').backgroundImage).toEqual(`url(${samplePost.data.thumbnail})`);
  });
});
