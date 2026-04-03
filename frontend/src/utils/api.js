const API_BASE_URL = 'http://localhost:5000/api';

export async function sendChatMessage(message, portfolioContext) {
  const response = await fetch(`${API_BASE_URL}/chatbot`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      portfolioContext,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || 'Unable to fetch chatbot response.');
  }

  return data.reply;
}
