import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { PostListContainer } from './PostListContainer';

const renderPostListContainer = (props = {}) => {
  return (
    <PostListContainer
      fetchPosts={() => null}
      {...props}
    />
  );
};

const shallowPostListContainer = (props = {}) => shallow(renderPostListContainer(props));

describe('<PostListContainer>', () => {
  it('Should fetch posts after mounting', () => {
    const fetchPosts = sinon.spy();

    shallowPostListContainer({
      fetchPosts,
    });
  });
});
