// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  postList.innerHTML = ""; // clear before adding

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

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    displayPosts(data); // call function
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call function
fetchPosts();