const fetchPosts = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

module.exports = {
  fetchPosts,
};
