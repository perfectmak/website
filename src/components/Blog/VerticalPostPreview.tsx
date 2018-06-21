import React from 'react';
import styled from 'styled-components';
import { size } from '@src/breakpoints';
import Moment from 'react-moment';
import Markdown from 'react-markdown';
import { cropContent } from '@helpers/cropContent';

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
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
const PostItemContainer = styled.div`
  width: 32%
  background-color: #fff;
  margin-bottom: 20px;
  @media screen and (max-width: ${size.tabletL}) {
    width: 48%;
    margin-bottom: 20px;
  }
  @media screen and (max-width: ${size.mobileL}) {
    width: 100%;
  }
`;
const PostItemImage = styled.img`
  width: 100%;
`;
const Cropper = styled.div`
  width: 100%
  height: 160px;
  overflow: hidden;
`;
const CategoryContainer = styled.div`
  font-size: 0.8rem;
  color: #fff;
  background-color: #000;
  padding: 1px 4px 1px 4px;
  margin-right: 10px;
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
    <PostItemContainer>
      <a href={`/blog/post/${post.data.slug}`}>
        <Cropper>
          <PostItemImage src={post.data.thumbnail} />
        </Cropper>
        <RowContainer
          style={{
            color: '#a5a5a8',
            fontSize: '0.7rem',
            justifyContent: 'space-between',
            margin: '5%'
          }}
        >
          <CategoryContainer style={{ fontSize: '0.6rem' }}>
            {post.data.category.toUpperCase()} {''}
          </CategoryContainer>
          <Moment format={'MMMM Do, YYYY'}>{post.data.published_at}</Moment>
        </RowContainer>
        <Bold
          style={{ margin: '10px', fontSize: '0.9rem', textAlign: 'start' }}
        >
          {post.data.title}
        </Bold>
        <Text style={{ margin: '10px', fontSize: '0.8rem' }}>
          <Markdown source={cropContent(post.content, 20)} escapeHtml={false} />
        </Text>
      </a>
    </PostItemContainer>
  );
};
