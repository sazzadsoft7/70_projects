const blogForm = document.getElementById("blog-form");
const postsDiv = document.getElementById("posts");

// Load from localStorage on page load
window.onload = () => {
  showPosts();
};

// Submit handler
blogForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const post = { title, content, date: new Date().toLocaleString() };

  let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  posts.unshift(post); // add newest first
  localStorage.setItem("blogPosts", JSON.stringify(posts));

  blogForm.reset();
  showPosts();
});

// Display posts
function showPosts() {
  let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  postsDiv.innerHTML = "";

  posts.forEach(post => {
    const postEl = document.createElement("div");
    postEl.className = "post";
    postEl.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <small>🕒 ${post.date}</small>
    `;
    postsDiv.appendChild(postEl);
  });
}
