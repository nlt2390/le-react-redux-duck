import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ posts }) => {
  return (
    <ul>
      {
        posts.map((post) => {
          return (
            <li key={post.id}>
              {post.formattedTitle}
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
    formattedTitle: PropTypes.string,
  })),
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
