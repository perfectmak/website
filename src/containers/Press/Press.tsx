import React from 'react';
import styled from 'styled-components';

const RootWrap = styled.div`
  header {
    width: 100%;
    height: 361px;
    background: #181e26;

    .title {
      color: #ffffff;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
    }
  }
`;

interface PressProps {
  posts: Post[];
  categories: string[];
  history: History;
}

interface PressState {
  numPostsPerPage: number;
  posts: Post[];
  selectedCat: string;
  page: number;
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

class Press extends React.Component<PressProps, PressState> {
  render() {
    console.log(this);
    return (
      <RootWrap>
        <header>
          <h1 className="title">Press</h1>
        </header>
        <p>content</p>
      </RootWrap>
    );
  }
}

export default Press;
