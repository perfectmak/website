import React from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import TwitterIcon from '@images/icons/twitter-white.svg';
import MediumIcon from '@images/medium.svg';
import TwitterDefaultIcon from '@images/twitter.svg';
import FacebookIcon from '@images/icons/facebook-white.svg';

import { Button } from 'antd';
import { size } from '@src/breakpoints';
import { Link } from 'react-static';
import Moment from 'react-moment';
import Markdown from 'react-markdown';

import ProgressBar from '@components/Blog/ProgressBar';
import MarketSubscriberForm from '@components/MarketSubscriberForm';
import VerticalPostPreview from '@components/Blog/VerticalPostPreview';

const BlogPostWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    width: 75%;
    text-align: center;
    @media screen and (max-width: ${size.tablet}) {
      width: 95%;
    }
  }
  }

  .header-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 60px;
    opacity: 0;
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
    padding: 0px 15px 0px 15px;
    text-align: left;
    z-index: 1000;

    transition: 300ms;
    &.visible {
      transition: 300ms;
      opacity: 1;
      min-height: 60px;
    }

    > div#title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
    }
  }

  div#links-header {
    padding-left: 5px;
    display: flex;

    * {
      padding: 0px 4px 0px 4px;
    }
  }

  div#links-body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > a {
      margin: 0px 7px 0px 7px;
    }

    @media screen and (max-width: ${size.tablet}) {
      flex-direction: column;

      > a {
        margin: 12px 0px 0px 0px;
      }
    }
  }
`;
const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    to bottom,
    #181f26 0%,
    #181f26 15%,
    #f6f6f6 15%,
    #f6f6f6 100%
  );
  padding-bottom: 40px;
`;
const OuterContainer = styled.div`
  width: 65%;
  padding: 20px;
  @media screen and (max-width: ${size.tablet}) {
    width: 95%;
  }
`;
const ColumnContainer = styled.div`
  flex-direction: column;
`;
const BlogContrainer = styled.div`
  background-color: #fff;
  text-align: left;
`;
const Croppit = styled.div`
  width: 100%
  height: 300px;
  overflow: hidden;
`;
const BlogImage = styled.img`
  width: 100%;
`;
const ContentContainer = styled.div`
  color: #a5a5a8;
  padding: 20px;
  margin-bottom: 20px;
  img {
    max-width: 100%;
  }
`;
const TitleContainer = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 30px;
  padding-top: 20px;
  @media screen and (max-width: ${size.tablet}) {
    font-size: 22px;
  }
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CategoryContainer = styled.div`
  font-size: 0.8rem;
  color: #fff;
  background-color: #000;
  padding: 1px 4px 1px 4px;
  margin-right: 10px;
`;
const ReadTimeContainer = styled.p`
  font-size: 0.8rem;
`;
const LogoContainer = styled.img`
  margin-left: 5px;
  max-width: 25px;
  max-height: 25px;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background-color: #000;
  padding: 4px;
`;

const SubmitAndSignContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 38%;
  background-color: #fff;
  padding: 20px;
  @media screen and (max-width: ${size.tabletL}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const Text = styled.div`
  text-align: start;
  color: #a5a5a8;
`;
const Bold = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 15px;
`;
const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  width: 58%;
  @media screen and (max-width: ${size.tabletL}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const PostListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

interface Post {
  data: {
    title: string;
    published_at: number;
    medium_link: string;
    author: string;
    thumbnail: string;
    slug: string;
    category: string;
    readtime: number;
  };
  content: string;
}

interface BlogPostProps {
  post: Post;
}

interface BlogPostState {
  headerIsVisible: boolean;
  subscriptionPopUpVisible: boolean;
}

class BlogPost extends React.Component<BlogPostProps, BlogPostState> {
  constructor(props: BlogPostProps) {
    super(props);
    this.state = {
      headerIsVisible: false,
      subscriptionPopUpVisible: false
    };
    this.showHeader = this.showHeader.bind(this);
    this.hideHeader = this.hideHeader.bind(this);
    this.renderSocialButtons = this.renderSocialButtons.bind(this);
  }

  showHeader() {
    this.setState({
      headerIsVisible: true
    });
  }

  hideHeader() {
    this.setState({
      headerIsVisible: false
    });
  }
  filterPosts(posts: Post[], post: Post, n: number) {
    if (!post || !posts) {
      return undefined;
    }
    const filteredById = posts.filter(el => el.data.title !== post.data.title);
    if (filteredById.length <= n) {
      return filteredById;
    }
    const filteredByCat = filteredById.filter(
      el => el.data.category === post.data.category
    );
    if (filteredByCat.length >= n) {
      return filteredByCat.slice(0, n);
    } else {
      return filteredByCat
        .concat(
          filteredById.filter(el => el.data.category !== post.data.category)
        )
        .slice(0, n);
    }
  }

  renderSocialButtons(section: string) {
    if ('body' === section) {
      return (
        <div id={'links-body'}>
          <Link
            to={this.props.post.data.medium_link}
            target={'_blank'}
            title={'Read on Medium'}
          >
            <Button
              type="primary"
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0 18px 0 18px',
                textAlign: 'left'
              }}
            >
              {'Read on Medium'}
              <img
                alt={'Read on Medium'}
                src={MediumIcon}
                width={'18px'}
                style={{ marginLeft: 12 }}
              />
            </Button>
          </Link>

          <Link
            to={`https://twitter.com/intent/tweet?url=https://marketprotocol.io/blog/post/${
              this.props.post.data.slug
            }&via=MarketProtocol`}
            target={'_blank'}
            title={'Share via Twitter'}
          >
            <Button
              type="primary"
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0 18px 0 18px',
                textAlign: 'left'
              }}
            >
              {'Share via Twitter'}
              <img
                alt={'Share via Twitter'}
                src={TwitterDefaultIcon}
                width={'18px'}
                style={{ marginLeft: 12 }}
              />
            </Button>
          </Link>
        </div>
      );
    } else if ('header' === section) {
      return (
        <div id={'links-header'}>
          <Link
            to={this.props.post.data.medium_link}
            target={'_blank'}
            title={'Read on Medium'}
          >
            <img alt={'Read on Medium'} src={MediumIcon} width={'26px'} />
          </Link>

          <Link
            to={`https://twitter.com/intent/tweet?url=https://marketprotocol.io/blog/post/${
              this.props.post.data.slug
            }&via=MarketProtocol`}
            target={'_blank'}
            title={'Share via Twitter'}
          >
            <img
              alt={'Share via Twitter'}
              src={TwitterDefaultIcon}
              width={'26px'}
            />
          </Link>
        </div>
      );
    }
  }

  render() {
    const { headerIsVisible, subscriptionPopUpVisible } = this.state;
    const { post } = this.props;

    return (
      <BlogPostWrap>
        {/* header with progress bar, title, twitter share button, and read on medium button */}
        <div
          className={['header-wrap', headerIsVisible && 'visible'].join(' ')}
        >
          <ProgressBar />

          <div id={'title'}>
            <p>{post.data.title}</p>
          </div>

          {this.renderSocialButtons('header')}
        </div>

        {/* trigger point for displaying progress bar */}
        <Waypoint onEnter={this.hideHeader} onLeave={this.showHeader} />

        <BackgroundContainer>
          <OuterContainer>
            <ColumnContainer>
              <Link to="/blog">
                <Button
                  type="primary"
                  icon="arrow-left"
                  style={{
                    fontSize: '20px',
                    height: 40,
                    marginBottom: 20,
                    width: 40
                  }}
                />
              </Link>
              <BlogContrainer>
                <Croppit>
                  <BlogImage src={post.data.thumbnail} alt={''} />
                </Croppit>
                <ContentContainer>
                  <RowContainer>
                    <CategoryContainer className="category">
                      {post.data.category.toUpperCase()}
                    </CategoryContainer>
                    <Moment format={'MMMM Do, YYYY'}>
                      {post.data.published_at}
                    </Moment>
                  </RowContainer>
                  <TitleContainer className="titled">
                    {post.data.title}
                  </TitleContainer>
                  <RowContainer
                    style={{
                      justifyContent: 'space-between',
                      marginBottom: '15px'
                    }}
                  >
                    <ReadTimeContainer className="readtime">
                      Reading time: {post.data.readtime} minutes
                    </ReadTimeContainer>
                    <div>
                      <Link
                        to={`https://twitter.com/intent/tweet?url=https://marketprotocol.io/blog/post/${
                          this.props.post.data.slug
                        }&via=MarketProtocol`}
                        target={'_blank'}
                        title={'Share via Twitter'}
                      >
                        <LogoContainer
                          src={TwitterIcon}
                          width="25px"
                          height="25px"
                        />
                      </Link>
                      <Link
                        to={`https://www.facebook.com/sharer/sharer.php?u=https://marketprotocol.io/blog/post/${
                          this.props.post.data.slug
                        }`}
                        target={'_blank'}
                        title={'Share via Facebook'}
                      >
                        <LogoContainer
                          src={FacebookIcon}
                          width="25px"
                          height="25px"
                        />
                      </Link>
                    </div>
                  </RowContainer>
                  <Markdown source={post.content} escapeHtml={false} />
                </ContentContainer>
              </BlogContrainer>
              <SubmitAndSignContainer>
                <SignUpContainer>
                  <Text>
                    <Bold>Want to Learn More?</Bold>
                    <p>Chat with the founders and engineering team</p>
                  </Text>
                  <Link to="https://t.me/Market_Protocol_Chat" target="_blank">
                    <Button className="btntelegram" type="primary">
                      <span
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          padding: '5px'
                        }}
                      >
                        Join our Telegram
                      </span>
                    </Button>
                  </Link>
                </SignUpContainer>
                <SubmitContainer>
                  <Text>
                    <Bold>Sign up for our newsletter</Bold>
                    <p>
                      Recieve our newsletter to stay on top of latest posts.
                    </p>
                  </Text>
                  <div>
                    <MarketSubscriberForm
                      onCancel={() =>
                        this.setState({ subscriptionPopUpVisible: false })
                      }
                      visible={subscriptionPopUpVisible}
                    />
                    <Button
                      className="btnsubscribe"
                      onClick={() =>
                        this.setState({ subscriptionPopUpVisible: true })
                      }
                      htmlType="submit"
                      type="primary"
                    >
                      <span
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          padding: '5px'
                        }}
                      >
                        Subscribe
                      </span>
                    </Button>
                  </div>
                </SubmitContainer>
              </SubmitAndSignContainer>
            </ColumnContainer>
            <Bold
              className="readersenjoy"
              style={{ margin: '40px', fontSize: '1.4rem' }}
            >
              Readers also enjoyed
            </Bold>
            <PostListContainer>
              {this.props.blogData && this.props.blogData.posts.length > 0 ? (
                this.filterPosts(this.props.blogData.posts, post, 3).map(el => (
                  <VerticalPostPreview key={el.data.title} post={el} />
                ))
              ) : (
                <Bold
                  style={{
                    color: '#a5a5a8',
                    fontSize: '1.2rem',
                    margin: '20px'
                  }}
                >
                  No posts
                </Bold>
              )}
            </PostListContainer>
          </OuterContainer>
        </BackgroundContainer>
      </BlogPostWrap>
    );
  }
}

export default BlogPost;
