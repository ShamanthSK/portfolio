const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000/api' : '/api');

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
    const errorMsg = import.meta.env.DEV 
      ? 'Chatbot backend is not reachable. Make sure the backend is running on port 5000.'
      : 'Chatbot backend is currently unreachable. Please try again later.';
    throw new Error(errorMsg);
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || 'Unable to fetch chatbot response.');
  }

  return data.reply;
}
