// popup.js
document.getElementById('summarize-btn').addEventListener('click', async () => {
    const inputText = document.getElementById('input-text').value;

    if (inputText) {
        const summary = await summarizeText(inputText);
        document.getElementById('output-summary').innerText = summary;
    } else {
        alert('Please select text to summarize!');
    }
});

async function summarizeText(text) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `Summarize the following text: ${text}`,
            max_tokens: 100
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
