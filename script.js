// Simulate chatbot responses
function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    // Display user message
    let chatlog = document.getElementById("chatlog");
    let userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput;
    chatlog.appendChild(userMessage);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Generate bot response
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.textContent = "DUKE Bot: " + getBotResponse(userInput);
        chatlog.appendChild(botMessage);
        chatlog.scrollTop = chatlog.scrollHeight; // Scroll to the bottom
    }, 1000);
}

// Define bot responses
function getBotResponse(userInput) {
    const responses = {
        "hi": "Hello! How can I help you today?",
        "what is DUKE?": "DUKE is a company focused on creating AI-powered safety vehicles.",
        "what products do you offer?": "We offer autonomous SUVs, AI-powered sedans, and electric vehicles.",
        "how can I contact you?": "You can contact us via the contact page or email us at info@duke.com."
    };

    return responses[userInput.toLowerCase()] || "Sorry, I didn't understand that.";
}
