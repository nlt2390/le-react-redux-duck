import { createSelector } from 'reselect';

export const selectorPost = state => state.post;
export const selectorPosts = state => selectorPost(state).posts;

export const selectorFormattedPosts = createSelector(
  [selectorPosts],
  (posts) => {
    return posts.map(post => ({
      ...post,
      formattedTitle: `${post.id}: ${post.title}`,
    }));
  },
);
