function toggleChatbot() {
    document.getElementById("chatbot-container").classList.toggle("show");
}

function sendMessage() {
    let userInput = document.getElementById("chatbot-input").value;
    document.getElementById("chatbot-messages").innerHTML += `<p><b>User:</b> ${userInput}</p>`;

    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_OPENAI_API_KEY"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    })
    .then(response => response.json())
    .then(data => {
        let botReply = data.choices[0].message.content;
        document.getElementById("chatbot-messages").innerHTML += `<p><b>AI:</b> ${botReply}</p>`;
    });

    document.getElementById("chatbot-input").value = "";
}
