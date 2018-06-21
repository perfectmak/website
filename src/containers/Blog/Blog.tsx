import React from 'react';
import Waypoint from 'react-waypoint';
import { size } from '@src/breakpoints';
import Hero from '@components/Hero';
import Cta from '@components/Cta';
import CategorySelector from '@components/Blog/CategorySelector';
import styled from 'styled-components';
import Follow from '@components/Blog/Follow';
import PostPreview from '@components/Blog/PostPreview';
import RecentTweets from '@components/Blog/RecentTweets';
import SignUp from '@components/Blog/SignUp';
import Subscribe from '@components/Blog/Subscribe';
import throttle from 'lodash/throttle';
import { Button, Col, Row } from 'antd';

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
        line-height: 260px;
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

    #load-more-button {
      display: block;
      font-size: 20px;
      margin: 100px auto;
      padding: 0 65px;
      text-align: center;
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
    readtime: number;
  };
  content: string;
}

class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.handleScroll = throttle(() => {
      this.forceUpdate();
    }, 10);

    this.state = {
      filteredPosts: [],
      numPostsPerPage: 5,
      pagifiedPosts: [[]],
      selectedCat: 'All',
      selectedPageIndex: 0
    };
  }

  componentDidMount() {
    const pagifiedPosts = this.splitPostsIntoPages(this.props.posts);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
    this.setState({ pagifiedPosts });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleScroll);
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

  renderCategorySelector(shouldRender: boolean) {
    if (!shouldRender) {
      return;
    }

    const { categories } = this.props;
    const { selectedCat } = this.state;

    return (
      <Row xs={{ span: 24 }} id="row">
        <CategorySelector
          selectedCat={selectedCat}
          categories={categories}
          onSelectCat={this.onSelectCat.bind(this)}
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
        <Row>
          <SignUp />
        </Row>
        <Row id="row">
          <Subscribe />
        </Row>
        {this.renderCategorySelector(window.innerWidth >= 768)}
        <Row xs={{ span: 24 }} id="row">
          <Follow />
        </Row>
        <Row id="row">
          <RecentTweets />
        </Row>
      </Col>
    );
  }

  render() {
    const { selectedPageIndex, pagifiedPosts } = this.state;
    const postsToRender = pagifiedPosts[selectedPageIndex];

    return (
      <RootWrap>
        <div id="root">
          <div id="header">
            <div id="headerTitle">Blog</div>
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
                <Row gutter={24} id="row">
                  <Col xs={{ span: 24 }} id="row">
                    <PostPreview post={postsToRender[0]} featured={true} />
                    {this.renderCategorySelector(window.innerWidth <= 768)}
                  </Col>
                  {(postsToRender || [])
                    .slice(1, postsToRender.length)
                    .map((post, i) => {
                      return (
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: 12 }}
                          md={{ span: 12 }}
                          lg={{ span: 12 }}
                          id="row"
                          key={i}
                        >
                          <PostPreview key={`post#${i}`} post={post} i={i} />
                        </Col>
                      );
                    })}
                  <Col xs={{ span: 24 }}>
                    <Button type="primary" id="load-more-button">
                      Load more
                    </Button>
                  </Col>
                </Row>
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
