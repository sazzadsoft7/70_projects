document.addEventListener("DOMContentLoaded", loadPosts);

function addPost() {
    let content = document.getElementById("blogContent").value;
    if (content.trim() === "") {
        alert("Please write something before posting!");
        return;
    }

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(content);
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("blogContent").value = "";
    loadPosts();
}

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let blogPosts = document.getElementById("blogPosts");
    blogPosts.innerHTML = "";

    posts.forEach((post, index) => {
        let postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
            <p>${post}</p>
            <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
        `;
        blogPosts.appendChild(postDiv);
    });
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    loadPosts();
}
