const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
let localData = [];

// Load data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        localData = data;
    })
    .catch(error => {
        console.error('Error loading data.json:', error);
    });

// Send Message Function
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    displayMessage(userMessage, 'user-message');
    userInput.value = '';

    // Check in local data first
    const foundResponse = localData.find(item =>
        item.question.toLowerCase() === userMessage.toLowerCase()
    );

    if (foundResponse) {
        displayMessage(foundResponse.answer, 'message');
    } else {
        // Fetch OpenAI API
        try {
            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_OPENAI_API_KEY`
                },
                body: JSON.stringify({
                    model: 'text-davinci-003',
                    prompt: userMessage,
                    max_tokens: 100,
                    temperature: 0.7
                })
            });

            const data = await response.json();
            const aiMessage = data.choices[0].text.trim();
            displayMessage(aiMessage, 'message');
        } catch (error) {
            displayMessage('Error: Unable to connect to AI.', 'message');
            console.error('Error:', error);
        }
    }
}

// Display Message Function
function displayMessage(message, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = className;
    msgDiv.innerText = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
