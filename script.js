const form = document.querySelector("form");
const input = document.querySelector(".sendMessage");
const chatMessages = document.querySelector(".chat__messages");
const sidebarUsers = document.querySelectorAll(".sidebar__user");
const chatHeaderName = document.querySelector(".chatHeader__left h3");
const chatContainer = document.querySelector(".chat__messages");

const serverLogos = document.querySelectorAll(".server-logo--clickable");

let currentUser = "Sidharth";
let currentAvatar = "assets/user3.jpg";

const userChats = {
  "Anant": [{ name: "Anant", avatar: "assets/user1.jpg", text: "Hey", timestamp: new Date().toLocaleDateString() }],
  "Khushi": [{ name: "Khushi", avatar: "assets/user2.jpg", text: "When is the presentation", timestamp: new Date().toLocaleDateString() }],
  "Sidharth": [{ name: "Sidharth", avatar: "assets/user3.jpg", text: "Hi", timestamp: new Date().toLocaleDateString() }],
  "Neha": [{ name: "Neha", avatar: "assets/user2.jpg", text: "When are we going to hold the meeting??", timestamp: new Date().toLocaleDateString() }],
  "Rohit": [{ name: "Rohit", avatar: "assets/user4.jpg", text: "What about the match", timestamp: new Date().toLocaleDateString() }],
  "Aarav": [{ name: "Aarav", avatar: "assets/user1.jpg", text: "Presentation is on 2nd week of may", timestamp: new Date().toLocaleDateString() }]
};

// Send message functionality
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() !== "") {
    const message = {
      name: "Sujal",
      avatar: "assets/user4.jpg",
      text: input.value.trim(),
      timestamp: new Date().toLocaleDateString()
    };

    userChats[currentUser].push(message);
    input.value = "";
    renderMessages();
  }
});

// Sidebar user click functionality
sidebarUsers.forEach((userDiv) => {
  userDiv.addEventListener("click", () => {
    const name = userDiv.querySelector("h4").textContent;
    const avatar = userDiv.querySelector("img").src;

    currentUser = name;
    currentAvatar = avatar;
    chatHeaderName.textContent = name;
    renderMessages();
  });
});

// Server logo click functionality
serverLogos.forEach((logo, index) => {
  logo.addEventListener("click", () => {
    // Custom welcome message for each server
    const welcomeMessage = `Welcome to Server ${index + 1}! Get ready to chat and have fun!`;

    // Set the welcome message in the chat section
    chatMessages.innerHTML = `
      <div class="welcome__message">
        ${welcomeMessage}
      </div>
    `;

    // Set the server name to the chat header (Optional)
    chatHeaderName.textContent = `Server ${index + 1}`;
  });
});

// Render messages for the selected user
function renderMessages() {
  chatContainer.innerHTML = "";
  const messages = userChats[currentUser];

  messages.forEach((msg) => {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";

    const avatar = document.createElement("img");
    avatar.src = msg.avatar;

    const messageInfo = document.createElement("div");
    messageInfo.className = "message__info";

    const userInfo = document.createElement("h4");
    userInfo.innerHTML = `${msg.name} <span class="message__timestamp">${msg.timestamp}</span>`;

    const messageText = document.createElement("p");
    messageText.textContent = msg.text;

    messageInfo.appendChild(userInfo);
    messageInfo.appendChild(messageText);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageInfo);

    chatContainer.appendChild(messageDiv);
  });

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

const sendIcon = document.querySelector(".send-icon");

sendIcon.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const message = {
      name: "Sujal",
      avatar: "assets/user4.jpg",
      text: input.value.trim(),
      timestamp: new Date().toLocaleDateString()
    };

    userChats[currentUser].push(message);
    input.value = "";
    renderMessages();
  }
});
s

// Initial call to render messages for the default user
renderMessages();
