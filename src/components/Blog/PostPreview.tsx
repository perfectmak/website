import React from 'react';
import styled from 'styled-components';
import { size } from '@src/breakpoints';
import Category from '@components/Blog/Category';
import SocialLinks from './SocialLinks';
import Moment from 'react-moment';
import Dotdotdot from 'react-dotdotdot';
import medium from '@images/medium-white.svg';

const RootWrap = styled.div`
  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    padding: 30px;
    width: 100%;
    display: block;

    #blogStats {
      #blogStatsCategory {
        background: #181e26;
        color: #ffffff;
        display: inline-block;
        font-size: 10px;
        line-height: 12px;
        padding: 4px 10px;
        text-transform: uppercase;
        vertical-align: top;
        margin-right: 19px;
      }

      #blogStatsTime {
        color: #8b8b8b;
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        vertical-align: top;
      }
    }

    #blogImage {
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      border: none;
      height: 132px;
      margin: -30px 0 30px -30px;
      width: calc(100% + 60px);
    }

    #blogTitle {
      font-weight: bold;
      margin-top: 12px;
    }

    #blogContent {
      color: #646469;
      margin-top: 10px;
    }

    #blogActions {
      margin-top: 38px;

      #blogLink {
        vertical-align: top;
        line-height: 30px;
        width: calc(100% - 80px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;

        #arrow-container {
          background: #00e2c1;
          border-radius: 100%;
          color: white;
          display: inline-block;
          height: 16px;
          line-height: 16px;
          margin-left: 9px;
          margin-top: 8px;
          text-align: center;
          vertical-align: top;
          width: 16px;

          #arrow {
            margin-top: -1px;
          }
        }
      }

      #socialLinksWrapper {
        float: right;
      }
    }
  }
`;

const classes = {
  card: {
    background: '#FFFFFF',
    boxShadow: '0 2px 14px 0 rgba(0,0,0,0.05)',
    padding: '30px',
    width: '100%'
  }
};

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

interface Props {
  post: Post;
  featured: boolean;
}

export default ({ post, featured = false }: Props) => {
  if (!post) {
    return null;
  }

  return (
    <RootWrap>
      <div id="root">
        <div
          id="blogImage"
          style={{
            backgroundImage: `url(${post.data.thumbnail})`,
            height: featured ? '280px' : '132px'
          }}
        />
        <div id="blogStats">
          <div id="blogStatsCategory">{post.data.category}</div>
          <div id="blogStatsTime">
            <Moment format={'MMMM D, YYYY'}>{post.data.published_at}</Moment>
          </div>
        </div>
        <div
          id="blogTitle"
          style={{
            fontSize: featured ? '28px' : '21px',
            lineHeight: featured ? '33px' : '29px'
          }}
        >
          <Dotdotdot clamp={3}>{post.data.title}</Dotdotdot>
        </div>
        <div
          style={{
            fontSize: featured ? '18px' : '14px',
            lineHeight: featured ? '24px' : '20px'
          }}
          id="blogContent"
        >
          <Dotdotdot clamp={4}>{post.content}</Dotdotdot>
        </div>
        <div id="blogActions">
          <a id="blogLink" href={`/blog/post/${post.data.slug}`}>
            Continue Reading{' '}
            <div id="arrow-container">
              <div id="arrow">›</div>
            </div>
          </a>
          <div id="socialLinksWrapper">
            <SocialLinks slug={post.data.slug} />
          </div>
        </div>
      </div>
    </RootWrap>
  );
};
