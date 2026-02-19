// Add message to chat
function addMessage(text, type) {
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = `
        <div class="message-bubble">
            ${text}
            <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    `;
    document.getElementById('chatMessages').appendChild(div);
    document.getElementById('chatMessages').scrollTop = 999999;
}

// Send message
function sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    
    if (text) {
        addMessage(text, 'sent'); // Your message
        input.value = '';
        
        // Bot replies after 1 second
        setTimeout(() => {
            addMessage('Thanks for your message!', 'received');
        }, 1000);
    }
}

document.getElementById('sendBtn').onclick = sendMessage;
document.getElementById('messageInput').onkeypress = (e) => {
    if (e.key === 'Enter') sendMessage();
};

addMessage('Hi! Send me a message.', 'received');
