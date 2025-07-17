const chatContainer = document.getElementById("chat-container");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

function addMessage(content, className) {
  const message = document.createElement("div");
  message.className = `message ${className}`;
  message.textContent = content;
  chatContainer.appendChild(message);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage("Echo: " + message, "bot");
  }, 500);
});
