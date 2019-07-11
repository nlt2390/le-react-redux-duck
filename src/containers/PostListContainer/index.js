import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  PostList,
} from '../../components';
import {
  postSelectors,
  postActions,
} from '../../state/post';


class PostListContainer extends React.Component {
  componentDidMount() {
    const {
      fetchPosts,
    } = this.props;

    fetchPosts();
  }

  render() {
    const {
      posts,
    } = this.props;

    return (
      <PostList posts={posts} />
    );
  }
}

PostListContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  fetchPosts: PropTypes.func.isRequired,
};

PostListContainer.defaultProps = {
  posts: [],
};

const mapStateToProps = state => ({
  posts: postSelectors.selectorPosts(state),
});

export default connect(mapStateToProps, {
  fetchPosts: postActions.fetchPosts,
})(PostListContainer);
