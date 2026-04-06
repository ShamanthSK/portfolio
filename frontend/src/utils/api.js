const API_BASE_URL = 'http://localhost:5000/api';

export async function sendChatMessage(message, portfolioContext) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}/chatbot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        portfolioContext,
      }),
    });
  } catch (_error) {
    throw new Error('Chatbot backend is not reachable. Make sure the backend is running on port 5000.');
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || 'Unable to fetch chatbot response.');
  }

  return data.reply;
}
