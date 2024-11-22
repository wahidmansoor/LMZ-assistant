async function sendMessage() {
      const userInput = document.getElementById('user-input').value;
      const chatBox = document.getElementById('chat-box');

      if (userInput.trim() === '') return;

      chatBox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;
      document.getElementById('user-input').value = '';

      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
          },
          body: JSON.stringify({
            model: 'mistralai/Mistral-7B-Instruct-v0.1',
            messages: [{ role: 'user', content: userInput }]
          })
        });

        const data = await response.json();
        chatBox.innerHTML += `<div><strong>Assistant:</strong> ${data.choices[0].message.content}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
      } catch (error) {
        console.error('Error:', error);
        chatBox.innerHTML += `<div><strong>Assistant:</strong> An error occurred. Please try again.</div>`;
      }
    }
