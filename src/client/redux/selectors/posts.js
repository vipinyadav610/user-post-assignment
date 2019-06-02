export const searchStringInArray = (str, posts, count) => {
  posts = posts.filter(item => {
    return item.title.match(str);
  });
  if (count) {
    return posts.slice(0, count);
  } else {
    return posts;
  }
};
