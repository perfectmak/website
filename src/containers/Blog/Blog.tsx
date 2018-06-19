import React from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import { size } from '@src/breakpoints';
import Hero from '@components/Hero';
import Cta from '@components/Cta';
import PostPreview from '@components/Blog/PostPreview';
import CategorySelector from '@components/Blog/CategorySelector';

const BlogWrap = styled.div`
  display: flex;
  flex-direction: row;

  > div.posts-wrap {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    padding-bottom: 40px;
  }

  > div.categories-wrap {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 40px;
    padding-bottom: 40px;
    z-index: 1;

    &.fixed {
      position: fixed;
      top: 0;
      right: 0;
    }
  }

  @media screen and (max-width: ${size.laptop}) {
    flex-direction: column;

    > div.posts-wrap {
      width: 100%;
    }

    > div.categories-wrap {
      display: none;
    }
  }
`;

interface BlogProps {
  posts: Post[];
  categories: string[];
}

interface BlogState {
  filteredPosts: Post[];
  numPostsPerPage: number;
  pagifiedPosts: Post[][];
  selectedCat: string;
  selectedPageIndex: number;
  sideMenuIsFixed: boolean;
}

interface Post {
  data: {
    title: string;
    author: string;
    category: string;
    published_at: number;
    medium_link: string;
    thumbnail: string;
    slug: string;
  };
  content: string;
}

class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {
      filteredPosts: [],
      numPostsPerPage: 5,
      pagifiedPosts: [[]],
      selectedCat: 'All',
      selectedPageIndex: 0,
      sideMenuIsFixed: false
    };

    this.toggleFixedSideMenu = this.toggleFixedSideMenu.bind(this);
    this.untoggleFixedSideMenu = this.untoggleFixedSideMenu.bind(this);
  }

  componentDidMount() {
    const pagifiedPosts = this.splitPostsIntoPages(this.props.posts);
    this.setState({ pagifiedPosts });
  }

  toggleFixedSideMenu() {
    this.setState({
      sideMenuIsFixed: true
    });
  }

  untoggleFixedSideMenu() {
    this.setState({
      sideMenuIsFixed: false
    });
  }

  splitPostsIntoPages(posts: Post[]) {
    const { numPostsPerPage } = this.state;
    const numPosts = posts.length;
    const numFullPages = Math.floor(numPosts / numPostsPerPage);
    const numExcessPosts = numPosts - numFullPages * numPostsPerPage;
    const numPages = numFullPages + (numExcessPosts > 0 ? 1 : 0);

    // create an array for each page
    const pages: Post[][] = [];
    for (let i = 0; i < numPages; i++) {
      pages.push([]);
    }

    // populate page arrays
    let p = 0;
    for (let i = 0; i < numPosts; i++) {
      // increment page index
      if (pages[p].length === numPostsPerPage) {
        p += 1;
      }

      const post = posts[i];
      const page: Post[] = pages[p];

      page.push(post);
    }

    return pages;
  }

  onSelectPage(i: number) {
    if (i === this.state.selectedPageIndex) {
      return 'cancelled invocation';
    }

    this.setState({ selectedPageIndex: i }, () => {
      // scroll to top of post list
      if (document && document.getElementById('top-of-post-list-anchor')) {
        document.getElementById('top-of-post-list-anchor').scrollIntoView();
      }
    });
  }

  onSelectCat(cat: string) {
    this.setState({ selectedCat: cat }, () => this.filterPosts());
  }

  filterPosts() {
    const { selectedPageIndex, selectedCat } = this.state;
    const { posts } = this.props;
    const filtered =
      'All' === selectedCat
        ? posts
        : posts.filter(post => post.data.category === selectedCat);
    const pagified = this.splitPostsIntoPages(filtered);

    // if currently selected page is going to vanish after re-pagination,
    // select last page in post-pagination post list
    const selectedPageExists = Array.isArray(pagified[selectedPageIndex]);

    this.setState({
      filteredPosts: filtered,
      pagifiedPosts: pagified,
      selectedPageIndex: selectedPageExists
        ? selectedPageIndex
        : pagified.length - 1
    });
  }

  renderPaginationButtons(styles?: {}) {
    const { selectedPageIndex, pagifiedPosts } = this.state;
    const numPages = pagifiedPosts.length;
    const isFirstPage = selectedPageIndex === 0;
    const isLastPage = numPages === 1 || selectedPageIndex === numPages - 1;

    return (
      <div
        className={'pagination-buttons'}
        style={Object.assign({}, styles || {}, {
          display: 'flex',
          marginBottom: 10
        })}
      >
        <p
          onClick={() =>
            isFirstPage ? null : this.onSelectPage(selectedPageIndex - 1)
          }
          style={{
            backgroundColor: '#f6f6f6',
            borderRadius: 6,
            color: isFirstPage ? '#A9AEB7' : '#181E26',
            cursor: isFirstPage ? 'default' : 'pointer',
            margin: 3,
            padding: '4px 14px 4px 14px'
          }}
        >
          {'<'}
        </p>

        {pagifiedPosts.map((page, i) => (
          <p
            onClick={() => this.onSelectPage(i)}
            style={{
              backgroundColor: '#f6f6f6',
              borderRadius: 6,
              color: selectedPageIndex === i ? '#00E2C1' : '#181E26',
              cursor: 'pointer',
              margin: 3,
              padding: '4px 14px 4px 14px'
            }}
            key={i}
          >
            {`${i + 1}`}
          </p>
        ))}

        <p
          onClick={() =>
            isLastPage ? null : this.onSelectPage(selectedPageIndex + 1)
          }
          style={{
            backgroundColor: '#f6f6f6',
            borderRadius: 6,
            color: isLastPage ? '#A9AEB7' : '#181E26',
            cursor: isLastPage ? 'default' : 'pointer',
            margin: 3,
            padding: '4px 14px 4px 14px'
          }}
        >
          {'>'}
        </p>
      </div>
    );
  }

  render() {
    const { categories } = this.props;
    const {
      selectedPageIndex,
      selectedCat,
      pagifiedPosts,
      sideMenuIsFixed
    } = this.state;
    const postsToRender = pagifiedPosts[selectedPageIndex];

    return (
      <div>
        {/* header */}
        <Waypoint
          onEnter={this.untoggleFixedSideMenu}
          onLeave={this.toggleFixedSideMenu}
        >
          <div>
            <Hero text={'Welcome to the MARKET Protocol blog.'} />
          </div>
        </Waypoint>

        <BlogWrap>
          {/* post previews  and pagination buttons */}
          <div className={'posts-wrap'}>
            <div id={'top-of-post-list-anchor'} />

            {/* post previews */
            postsToRender.map((post, i) => {
              return <PostPreview key={`post#${i}`} post={post} i={i} />;
            })}

            {/* pagination buttons */
            this.renderPaginationButtons({ margin: '20px 0px 0px 0px' })}
          </div>

          {/* pagination buttons, category selectors and newsletter cta */}
          <div
            className={['categories-wrap', sideMenuIsFixed && 'fixed'].join(
              ' '
            )}
          >
            <h2>Categories</h2>
            <CategorySelector
              selectedCat={selectedCat}
              categories={categories}
              onSelectCat={(cat: string) => this.onSelectCat(cat)}
            />

            <div style={{ width: '80%', marginTop: 10 }}>
              <h2>Join our newsletter</h2>
              <Cta onlyShowSubscribeButton />
            </div>
          </div>
        </BlogWrap>
      </div>
    );
  }
}

export default Blog;
