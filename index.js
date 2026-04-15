function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  postList.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");

    const title = document.createElement("h1");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);

    postList.appendChild(li);
  });
}

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  displayPosts(data);

  return data;
}

// IMPORTANT: export for tests
module.exports = {
  fetchPosts,
  displayPosts
};