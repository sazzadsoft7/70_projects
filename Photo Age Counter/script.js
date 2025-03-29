function predictAge() {
    const fileInput = document.getElementById('photoInput');
    const previewImage = document.getElementById('previewImage');
    const ageDisplay = document.getElementById('age');
  
    if (!fileInput.files.length) {
      alert('Please upload a photo!');
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.style.display = 'block';
  
      // 🧠 Demo age prediction (random age between 18-40)
      const randomAge = Math.floor(Math.random() * 23) + 18;
      ageDisplay.innerText = `${randomAge} years (Demo)`;
  
      // 🔐 NOTE: You can integrate Face API here (see below)
    };
  
    reader.readAsDataURL(file);
  }
  