export const selectorPost = state => state.post;
export const selectorPosts = state => selectorPost(state).posts;
