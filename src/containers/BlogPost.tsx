import React from 'react';
import { Link, withRouteData } from 'react-static';
import Moment from 'react-moment';
import Markdown from 'react-markdown';

interface Post {
  data: {
    title: string;
    date: number;
    thumbnail: string;
  };
  content: any;
}

interface Props {
  post: Post;
}

export default withRouteData(({ post }: Props) => (
  <div className="blog-post">
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.data.title}</h3>
    <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
    <img className="image" src={post.data.thumbnail} alt="" />
    <Markdown source={post.content} escapeHtml={false} />
  </div>
));
