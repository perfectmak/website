import React from 'react';
import styled from 'styled-components';
import { size } from '@src/breakpoints';
import Category from '@components/Blog/Category';
import Moment from 'react-moment';

const BlogPostPreviewWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 200px;
  margin-top: 40px;

  > div.title {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 20px;

    * {
      padding-left: 20px;
      padding-right: 20px;
      margin: 0;
      border-left: 3px solid #f6f6f6;
    }

    p {
      color: #4E5668;
    }
  }

  > div.thumbnail {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow: hidden
    height: 100%;
    border-radius: 8px;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: ${size.tablet}) {
    width: 94%;
    height: auto;
    flex-direction: column;
    margin-left: 3%;

    > div.title {
      width: 94%;
    }

    > div.thumbnail {
      height: auto;
      width: 90%;
    }
  }
`;

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
}

export default ({ post }: Props) => {
  if (!post) {
    return null;
  }

  return (
    <a href={`/blog/post/${post.data.slug}`}>
      <BlogPostPreviewWrap>
        {/* category, title, author, date */}
        <div className={'title'}>
          <Category cat={post.data.category} showBorder />

          <h2>{post.data.title}</h2>

          <p>{`by ${post.data.author}`}</p>

          <Moment format={'MMMM Do, YYYY'}>{post.data.published_at}</Moment>
        </div>

        {/* thumbnail */}
        <div className={'thumbnail'}>
          <img src={post.data.thumbnail} />
        </div>
      </BlogPostPreviewWrap>
    </a>
  );
};
