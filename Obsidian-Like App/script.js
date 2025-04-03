const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const toggleTheme = document.getElementById("toggle-theme");

// Markdown to HTML converter function (basic)
function convertMarkdown(text) {
    return text
        .replace(/^# (.*$)/gim, "<h1>$1</h1>") // H1
        .replace(/^## (.*$)/gim, "<h2>$1</h2>") // H2
        .replace(/^### (.*$)/gim, "<h3>$1</h3>") // H3
        .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>") // Bold
        .replace(/\*(.*?)\*/gim, "<i>$1</i>") // Italic
        .replace(/\n/g, "<br>"); // New line
}

// Load saved data
document.addEventListener("DOMContentLoaded", () => {
    const savedText = localStorage.getItem("markdownContent");
    if (savedText) {
        editor.value = savedText;
        preview.innerHTML = convertMarkdown(savedText);
    }
});

// Save data to localStorage
editor.addEventListener("input", () => {
    const text = editor.value;
    preview.innerHTML = convertMarkdown(text);
    localStorage.setItem("markdownContent", text);
});

// Toggle Dark/Light mode
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleTheme.textContent = document.body.classList.contains("light-mode") ? "🌑 Dark Mode" : "🌙 Light Mode";
});
