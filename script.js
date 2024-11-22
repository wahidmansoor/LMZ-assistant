function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  if (userInput.value.trim() !== '') {
    // Add user message to chat
    chatBox.innerHTML += `<p class="user-message">${userInput.value}</p>`;

    // Here you would typically send the message to your AI backend
    // and get a response. For now, let's just echo the message back.
    setTimeout(() => {
      chatBox.innerHTML += `<p class="ai-message">You said: ${userInput.value}</p>`;
      userInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}

// Allow sending message with Enter key
document.getElementById('user-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
