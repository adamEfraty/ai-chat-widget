export const chatService = {
  sendMessage,
};

function sendMessage(message: string) {
  // Here you would typically send the message to a server or WebSocket
  console.log("Sending message:", message);
}
