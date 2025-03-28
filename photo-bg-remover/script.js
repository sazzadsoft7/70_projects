async function removeBackground() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
  
    if (!file) {
      alert("Please select an image first.");
      return;
    }
  
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");
  
    try {
      const res = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": "t94C68uNdaaKhTeqVBM8m58C", // 🔑  Remove.bg API Key
        },
        body: formData
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }
  
      const blob = await res.blob();
      const imgURL = URL.createObjectURL(blob);
      document.getElementById("resultImage").src = imgURL;
  
    } catch (err) {
      alert("❌ Failed to remove background:\n" + err.message);
    }
  }
  