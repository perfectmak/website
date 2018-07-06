import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import { flatten, throttle } from 'lodash';
import { History } from 'history';
import posed, { PoseGroup } from 'react-pose';
import { device } from '@src/breakpoints';

import CategorySelector from '@components/Blog/CategorySelector';
import Follow from '@components/Blog/Follow';
import PostPreview from '@components/Blog/PostPreview';
import RecentTweets from '@components/Blog/RecentTweets';
import Subscribe from '@components/Blog/Subscribe';

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const PostContainer = styled(
  posed.div({
    enter: {
      y: '0%'
    },
    exit: {
      y: '10%'
    }
  })
)`
  display: flex;
  flex-grow: 0;
  width: 50%;

  @media ${device.mobileS} and (max-width: 767px) {
    width: 100%;
  }
`;

const RootWrap = styled.div`
  > #root {
    background: #eeeeee;
    display: block;

    #header {
      width: 100%;
      height: 361px;
      background: #181e26;

      #headerTitle {
        color: #ffffff;
        font-size: 48px;
        font-weight: bold;
        text-align: center;
      }

      #headerSubtitle {
        color: #ffffff;
        font-size: 22px;
        text-align: center;
      }
    }

    #gridContainer {
      max-width: 100%;
      margin: 0 auto;
      width: 1180px;
      padding: 24px;

      #blogs {
        margin-top: -154px;
      }
    }

    #row {
      margin-top: 24px;
    }

    #subtitle {
      color: #646469;
      font-size: 14px;
      line-heigh: 20px;
      margin-top: 10px;
    }

    .load-more-button {
      display: block;
      font-size: 20px;
      margin: 100px auto;
      padding: 0 65px;
      text-align: center;
    }
  }
`;

const isClient = typeof window !== 'undefined';

const parseCategory = (category: string) => {
  return category.replace(/\s+/g, '-').toLowerCase();
};

interface BlogProps {
  posts: Post[];
  categories: string[];
  history: History;
}

interface BlogState {
  filteredPosts: Post[];
  loadMore: number;
  numPostsPerPage: number;
  pagifiedPosts: Post[][];
  currentPosts: Post[][];
  selectedCat: string;
  selectedPageIndex: number;
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
    readtime: number;
  };
  content: string;
}

class Blog extends React.Component<BlogProps, BlogState> {
  private handleScroll: EventListener;

  constructor(props: BlogProps) {
    super(props);

    this.handleScroll = throttle(() => {
      this.forceUpdate();
    }, 10);

    this.state = {
      filteredPosts: [],
      loadMore: 0,
      numPostsPerPage: 5,
      pagifiedPosts: [[]],
      selectedCat: 'All',
      selectedPageIndex: 0
    };
  }

  componentDidMount() {
    const { categories, history, posts } = this.props;
    const pagifiedPosts = this.splitPostsIntoPages(posts);
    const loadMore = posts.length;

    this.setState({
      loadMore,
      pagifiedPosts
    });

    if (isClient) {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleScroll);
    }

    if (history.location.search) {
      const params = new URLSearchParams(history.location.search.toString());
      const category = params.get('category');

      if (category) {
        categories.map(c => {
          if (category === parseCategory(c)) {
            this.onSelectCat(c);
          }
        });
      }
    }
  }

  componentWillUnmount() {
    if (isClient) {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleScroll);
    }
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

  onSelectCat = (selectedCat: string) => {
    if (selectedCat === 'All') {
      this.props.history.push('/blog');
    } else {
      this.props.history.push(`/blog?category=${parseCategory(selectedCat)}`);
    }

    this.setState({ selectedCat }, () => this.filterPosts());
  }

  deselectCat = () => {
    this.props.history.push('/blog');
    this.setState({ selectedCat: 'All' }, () => this.filterPosts());
  }

  filterPosts() {
    const { selectedPageIndex, selectedCat } = this.state;
    const { posts } = this.props;
    const filtered =
      'All' === selectedCat
        ? posts
        : posts.filter(post => selectedCat === post.data.category);
    const pagified = this.splitPostsIntoPages(filtered);
    const loadMoreBtn = filtered.length === 0 ? posts.length : filtered.length;

    // if currently selected page is going to vanish after re-pagination,
    // select last page in post-pagination post list
    const selectedPageExists = Array.isArray(pagified[selectedPageIndex]);

    this.setState({
      filteredPosts: filtered,
      loadMore: loadMoreBtn,
      pagifiedPosts: pagified,
      selectedPageIndex: selectedPageExists
        ? selectedPageIndex
        : pagified.length - 1
    });
  }

  onLoadMore = () => {
    const {
      pagifiedPosts,
      selectedPageIndex,
      numPostsPerPage,
      loadMore
    } = this.state;
    const allPosts = flatten(pagifiedPosts);
    const newPageIndex = selectedPageIndex + 1;
    const end = newPageIndex * numPostsPerPage + numPostsPerPage;

    const currentPosts = allPosts.slice(0, end);

    this.setState({
      currentPosts,
      selectedPageIndex: newPageIndex
    });
  }

  renderCategorySelector(shouldRender: boolean) {
    if (!shouldRender) {
      return;
    }

    const { categories } = this.props;
    const { selectedCat } = this.state;

    return (
      <Row id="row">
        <CategorySelector
          selectedCat={selectedCat}
          categories={categories}
          deselectCat={this.deselectCat}
          onSelectCat={this.onSelectCat}
        />
      </Row>
    );
  }

  renderSidebar() {
    return (
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 8 }}
        lg={{ span: 6 }}
      >
        {this.renderCategorySelector(
          isClient ? window.innerWidth >= 768 : true
        )}

        <Row id="row">
          <Subscribe />
        </Row>
        <Row id="row">
          <Follow />
        </Row>
        <Row id="row">
          <RecentTweets />
        </Row>
      </Col>
    );
  }

  render() {
    const {
      pagifiedPosts,
      currentPosts = [],
      loadMore,
      numPostsPerPage,
      selectedCat
    } = this.state;

    const initialPosts = pagifiedPosts[0];

    const postsToRender = (currentPosts.length && currentPosts) || initialPosts;
    const shouldLoad = currentPosts.length >= loadMore;

    return (
      <RootWrap>
        <div id="root">
          <div id="header">
            <div id="headerTitle">Blog</div>
            {selectedCat !== 'All' && (
              <div id="headerSubtitle">{selectedCat}</div>
            )}
          </div>
          <div id="gridContainer">
            <Row gutter={24}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 26 }}
                md={{ span: 16 }}
                lg={{ span: 18 }}
                id="blogs"
              >
                <PostsContainer>
                  <div>
                    <PostPreview
                      history={this.props.history}
                      post={postsToRender[0]}
                      featured={true}
                    />
                  </div>
                  <PoseGroup>
                    {(postsToRender || [])
                      .slice(1, postsToRender.length)
                      .map((post, i) => {
                        return (
                          <PostContainer key={i}>
                            <PostPreview
                              key={`post#${i}`}
                              history={this.props.history}
                              post={post}
                              i={i}
                            />
                          </PostContainer>
                        );
                      })}
                  </PoseGroup>
                  <Col xs={{ span: 24 }}>
                    {shouldLoad ? (
                      <Button
                        type="primary"
                        className="load-more-button"
                        disabled
                      >
                        No more posts to load
                      </Button>
                    ) : (
                      <Button
                        type="primary"
                        className="load-more-button"
                        onClick={this.onLoadMore}
                      >
                        Load more
                      </Button>
                    )}
                  </Col>
                </PostsContainer>
              </Col>
              {this.renderSidebar()}
            </Row>
          </div>
        </div>
      </RootWrap>
    );
  }
}

export default Blog;
