const icons = ["🔥", "⭐", "💡", "🚀", "🌍", "📷", "🎨", "🔧", "💻", "🎮"];

function loadIcons() {
    const iconGallery = document.getElementById("iconGallery");
    iconGallery.innerHTML = "";

    icons.forEach(icon => {
        let div = document.createElement("div");
        div.classList.add("icon-box");
        div.innerHTML = icon;
        div.onclick = () => alert(`You clicked: ${icon}`);
        iconGallery.appendChild(div);
    });
}

function searchIcons() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const filteredIcons = icons.filter(icon => icon.includes(searchText));
    
    const iconGallery = document.getElementById("iconGallery");
    iconGallery.innerHTML = "";

    filteredIcons.forEach(icon => {
        let div = document.createElement("div");
        div.classList.add("icon-box");
        div.innerHTML = icon;
        div.onclick = () => alert(`You clicked: ${icon}`);
        iconGallery.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", loadIcons);
