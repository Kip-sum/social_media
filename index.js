function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());
}

// export only fetchPosts for testing
module.exports = {
  fetchPosts
};