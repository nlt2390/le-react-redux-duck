import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles';

const PostList = ({ posts }) => {
  return (
    <div css={styles.container}>
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
    </div>
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
