async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const apiKey = "AIzaSyBr8Q7sRhg6QcCWNbrMU9Hl6P4CE6inMXc";

    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            q: inputText,
            source: "en",
            target: "bn",
            format: "text"
        })
    });

    const data = await response.json();
    document.getElementById("outputText").innerText = data.data.translations[0].translatedText;
}
