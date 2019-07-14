import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ posts }) => {
  return (
    <ul>
      {
        posts.map((post) => {
          return (
            <li key={post.id}>
              {post.title}
            </li>
          );
        })
      }
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })),
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
