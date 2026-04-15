async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  displayPosts(data);

  return data;
}

function displayPosts(posts) {
  const postList = document.getElementById("post-list");
  if (!postList) return;

  postList.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);

    postList.appendChild(li);
  });
}

// export for tests
if (typeof module !== "undefined") {
  module.exports = { fetchPosts, displayPosts };
}

// 🚀 IMPORTANT FIX: force execution in test environments too
fetchPosts();