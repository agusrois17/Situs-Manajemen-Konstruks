document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    function appendMessage(sender, message) {
        let msgDiv = document.createElement("div");
        msgDiv.classList.add("chat-message", sender);
        msgDiv.textContent = message;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function botResponse(userText) {
        let response = "Maaf, saya tidak mengerti.";

        if (userText.includes("dokumen")) {
            response = "Anda bisa mengelola dokumen di halaman Manajemen Dokumen.";
        } else if (userText.includes("progress")) {
            response = "Lihat status progres proyek di Dashboard.";
        } else if (userText.includes("laporan")) {
            response = "Laporan harian, mingguan, dan bulanan tersedia di Manajemen Dokumen.";
        }

        setTimeout(() => appendMessage("bot", response), 500);
    }

    sendBtn.addEventListener("click", function () {
        let userText = userInput.value.trim();
        if (userText === "") return;

        appendMessage("user", userText);
        userInput.value = "";
        botResponse(userText);
    });

    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendBtn.click();
    });
});
