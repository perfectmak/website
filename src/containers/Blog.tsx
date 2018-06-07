import React from 'react';
import { Link, withRouteData } from 'react-static';

interface Post {
  data: {
    slug: string;
    title: string;
  };
}

interface Props {
  blogPosts: Post[];
}

export default withRouteData(({ blogPosts }: Props) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {blogPosts.map(post => (
        <li key={post.data.slug}>
          <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
