import React from 'react';
import Waypoint from 'react-waypoint';
import { mount, shallow } from 'enzyme';
import Blog from '@containers/Blog/Blog';
import { createMemoryHistory } from 'history';
import Hero from '@components/Hero';
import queryString from 'query-string';
import WithData from '@containers/Blog/index/';

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

  it('pagifies posts correctly', () => {
    const instance = component.instance();
    const { numPostsPerPage } = instance.state;

    // run pagification function
    const pagifiedPosts = instance.splitPostsIntoPages(posts);

    // define expected results
    const expected = {
      numPages: Math.ceil(numPostsToTest / numPostsPerPage),
      numPosts: numPostsToTest,
    };

    // define observed results
    const observed = {
      numPages: pagifiedPosts.length,
      numPosts: 0,
      postsAreUnique: false
    };

    // used to test for post uniqueness
    const postTitles = [];

    // loop through posts, counting them and testing for uniqueness
    pagifiedPosts.map((page, i) => {
      observed.numPosts += pagifiedPosts[i].length;
      page.map((post, i) => {
        if (!postTitles.includes(post.title)) {
          postTitles.push(post.title);
        }
      });
    });

    // updated observed post uniqueness value
    observed.postsAreUnique = postTitles.length === observed.numPages;

    expect(observed.numPages).toEqual(expected.numPages);
    expect(observed.numPosts).toEqual(expected.numPosts);
    expect(observed.postsAreUnique);
  });

  it('updates selectedCat state var with onSelectCat function', () => {
    const instance = component.instance();
    instance.onSelectCat('All');
    expect(component.state().selectedCat).toEqual('All');
  });

  describe('filterPosts function', () => {
    it('updates filteredPosts state var with posts that have the specified category', () => {
      const instance = component.instance();

      const expected = {
        numPostsWithCategoriesOtherThanCat1: 0
      };

      const observed = {
        numPostsWithCategoriesOtherThanCat1: 0
      };

      instance.setState({ selectedCat: 'cat1' });
      instance.filterPosts();

      const { filteredPosts } = component.state();

      for (let i = 0; i < filteredPosts.length; i++) {
        const curr = filteredPosts[i];
        if (curr.data.category !== 'cat1') {
          observed.numPostsWithCategoriesOtherThanCat1++;
        }
      }

      expect(observed.numPostsWithCategoriesOtherThanCat1).toEqual(expected.numPostsWithCategoriesOtherThanCat1);
    });

    it('repagifies filtered posts', () => {
      const instance = component.instance();
      const origPages = component.state().pagifiedPosts;
      instance.setState({ selectedCat: 'cat1' });
      instance.filterPosts();
      const newPages = component.state().pagifiedPosts;
      expect(newPages === origPages).toBeFalsy();
    });
    
  });

  it('scrolls without crashing', () => {
    const instance = component.instance();
    instance.handleScroll();
  });

  it('unmounts without crashing', () => {
    component.unmount();
  });

  it('updates selectedCat from search params', () => {
    const instance = component.instance();
    instance.props.history.push({ search: '?category=cat1' })
    instance.categoriesMap = categoriesMap;

    instance.setCategory(instance.props.history);

    expect(component.state().selectedCat).toEqual('cat1');
  });

});

describe('With data', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <WithData />
    );
  });
});
