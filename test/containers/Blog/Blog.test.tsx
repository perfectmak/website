import React from 'react';
import { shallow } from 'enzyme';
import Blog from '@containers/Blog/Blog';
import { createMemoryHistory } from 'history';
import WithData from '@containers/Blog';

interface Post {
  data: {
    title: string;
    author: string;
    category: string;
    published_at: string;
    medium_link: string;
    thumbnail: string;
    slug: string;
  };
  content: string;
}

describe('<Blog />', () => {
  let component = typeof Blog;
  const posts: Post[] = [];
  const numPostsToTest = 28;
  const categories: string[] = ['cat1', 'cat2', 'cat3'];
  const categoriesMap = {
    cat1: 'cat1',
    cat2: 'cat2',
    cat3: 'cat3',
  };

  // populate posts[]
  for (let i = 0; i < numPostsToTest; i++) {
    posts.push({
      data: {
        title: `post${i}`,
        author: `author${i}`,
        category: categories[Math.floor(Math.random() * Math.floor(3))],
        published_at: '2018-06-09T05:00:00-05:00',
        medium_link: 'http://medium.com/',
        thumbnail: 'path/to/thumbnail',
        slug: '/slug'
      },
      content: 'The content.'
    });
  }

  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/blog');

    component = shallow(
      <Blog posts={posts} categories={categories} history={history} />
    );
  });

  it('renders without crashing', () => {
    expect(component.exists());
  });

  it('updates selectedCat state var with onSelectCat function', () => {
    const instance = component.instance();
    instance.onSelectCat('All');
    expect(component.state().selectedCat).toEqual('All');
  });

  it('scrolls without crashing', () => {
    const instance = component.instance();
    instance.handleScroll();
  });

  it('unmounts without crashing', () => {
    component.unmount();
  });

  it('loads more posts', () => {
    const instance = component.instance();
    instance.onLoadMore();
    expect(component.state().page).toEqual(2);
  });
});

describe('With data', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <WithData />
    );
  });
});
