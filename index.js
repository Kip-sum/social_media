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

// IMPORTANT: return the promise
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    displayPosts(data);

    return data; // ✅ THIS LINE FIXES TEST
  } catch (error) {
    console.error(error);
  }
}

// ALSO IMPORTANT: export if needed
module.exports = { fetchPosts, displayPosts };

// call it
fetchPosts();