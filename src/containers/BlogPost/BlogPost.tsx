import React from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import TwitterIcon from '@images/twitter.svg';
import MediumIcon from '@images/medium.svg';
import TelegramIcon from '@images/telegram.svg';
import Category from '@components/Blog/Category';
import { Button } from 'antd';
import { size } from '@src/breakpoints';
import { Link } from 'react-static';
import Moment from 'react-moment';
import Markdown from 'react-markdown';

import ProgressBar from '@components/Blog/ProgressBar';

const BlogPostWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  > * {
    width: 75%;
    text-align: center;
    @media screen and (max-width: ${size.tablet}) {
      width: 95%;
    }
  }

  img#thumbnail {
    margin-top: 40px;
    width: 60%;
    border-radius: 10px;
    @media screen and (max-width: ${size.tablet}) {
      width: 90%;
    }
  }

  div#body {
    text-align: left;
    margin-top: 40px;
    margin-bottom: 40px;
    img {
      width: 60%;
      @media screen and (max-width: ${size.tablet}) {
        width: 90%;
      }
    }
  }

  div#afterword {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #f0f0f0;
    padding: 40px 0px 80px 0px;
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

interface Post {
  data: {
    title: string;
    published_at: number;
    medium_link: string;
    author: string;
    thumbnail: string;
    slug: string;
    category: string;
  };
  content: string;
}

interface BlogPostProps {
  post: Post;
}

interface BlogPostState {
  headerIsVisible: boolean;
}

class BlogPost extends React.Component<BlogPostProps, BlogPostState> {
  constructor(props: BlogPostProps) {
    super(props);

    this.state = {
      headerIsVisible: false
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
                src={TwitterIcon}
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
            <img alt={'Share via Twitter'} src={TwitterIcon} width={'26px'} />
          </Link>
        </div>
      );
    }
  }

  render() {
    const { headerIsVisible } = this.state;
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

        {/* category */}
        <Category cat={post.data.category} showBorder={false} dontPad />

        {/* title */}
        <h1 style={{ color: '#181E26', margin: 0 }}>{post.data.title}</h1>

        {/* author */}
        <h3 style={{ color: '#4E5668', margin: 0 }}>
          {`${post.data.author} • `}
          <Moment format={'MMMM Do, YYYY'}>{post.data.published_at}</Moment>
        </h3>

        {/* share via twitter and read on medium buttons */}
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
        >
          {this.renderSocialButtons('body')}
        </div>

        {/* trigger point for displaying progress bar */}
        <Waypoint onEnter={this.hideHeader} onLeave={this.showHeader} />

        {/* thumbnail */}
        <img
          className={'image'}
          src={post.data.thumbnail}
          alt={''}
          id={'thumbnail'}
        />

        {/* body */}
        <div id={'body'}>
          <Markdown source={post.content} escapeHtml={false} />
        </div>

        {/* afterword */}
        <div id={'afterword'}>
          <h2>{'Want to talk more about this post?'}</h2>

          <Link to={'https://t.me/Market_Protocol_Chat'} target={'_blank'}>
            <Button
              type="primary"
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'left',
                width: 220
              }}
            >
              {'Join our Telegram'}
              <img alt={'Telegram'} src={TelegramIcon} width={'22px'} />
            </Button>
          </Link>
        </div>
      </BlogPostWrap>
    );
  }
}

export default BlogPost;
