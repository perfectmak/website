import React from 'react';
import Waypoint from 'react-waypoint';
import { mount } from 'enzyme';
import Blog from '@containers/Blog/Blog';
import Hero from '@components/Hero';

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
  let posts: Post[] = [];
  let numPostsToTest = 28
  let categories: string[] = ['cat1', 'cat2', 'cat3'];

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
    component = mount(
      <Blog posts={posts} categories={categories} />
    );
  });

  it('renders without crashing', () => {
    expect(component.exists());
  });

  it('pagifies posts correctly', () => {
    let instance = component.instance();
    let { numPostsPerPage } = instance.state;

    // run pagification function
    let pagifiedPosts = instance.splitPostsIntoPages(posts);

    // define expected results
    let expected = {
      numPages: Math.ceil(numPostsToTest / numPostsPerPage),
      numPosts: numPostsToTest,
    }

    // define observed results
    let observed = {
      numPages: pagifiedPosts.length,
      numPosts: 0,
      postsAreUnique: false
    }

    // used to test for post uniqueness
    let postTitles = []

    // loop through posts, counting them and testing for uniqueness
    pagifiedPosts.map((page, i) => {
      observed.numPosts += pagifiedPosts[i].length;
      page.map((post, i) => {
        if (!postTitles.includes(post.title))
          postTitles.push(post.title);
      });
    });

    // updated observed post uniqueness value
    observed.postsAreUnique = postTitles.length === observed.numPages

    expect(observed.numPages).toEqual(expected.numPages);
    expect(observed.numPosts).toEqual(expected.numPosts);
    expect(observed.postsAreUnique);
  });

  it('updates selectedCat state var with onSelectCat function', () => {
    let instance = component.instance();
    instance.onSelectCat('All');
    expect(component.state().selectedCat).toEqual('All');
  });

  describe('filterPosts function', () => {
    it('updates filteredPosts state var with posts that have the specified category', () => {
      let instance = component.instance();

      let expected = {
        numPostsWithCategoriesOtherThanCat1: 0
      }

      let observed = {
        numPostsWithCategoriesOtherThanCat1: 0
      }

      instance.setState({ selectedCat: 'cat1' });
      instance.filterPosts();

      let { filteredPosts } = component.state();

      for (let i = 0; i < filteredPosts.length; i++) {
        let curr = filteredPosts[i];
        if (curr.data.category !== 'cat1')
          observed.numPostsWithCategoriesOtherThanCat1++;
      }

      expect(observed.numPostsWithCategoriesOtherThanCat1).toEqual(expected.numPostsWithCategoriesOtherThanCat1);
    });

    it('repagifies filtered posts', () => {
      let instance = component.instance();
      let origPages = component.state().pagifiedPosts
      instance.setState({ selectedCat: 'cat1' });
      instance.filterPosts();
      let newPages = component.state().pagifiedPosts
      expect(newPages === origPages).toBeFalsy();
    });
  });

  it('scrolls without crashing', () => {
    let instance = component.instance();
    instance.handleScroll();
  });

  it('unmounts without crashing', () => {
    component.unmount();
  });
});
