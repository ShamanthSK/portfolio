const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const getChatbotEndpoints = () => {
  if (import.meta.env.VITE_API_URL) {
    return [`${import.meta.env.VITE_API_URL}/chatbot`];
  }

  if (import.meta.env.DEV) {
    return ['/api/chatbot', 'http://localhost:5000/api/chatbot'];
  }

  return ['/api/chatbot'];
};

async function requestChatbot(endpoint, message, portfolioContext) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      portfolioContext,
    }),
  });

  const rawText = await response.text();
  let data = null;

  try {
    data = rawText ? JSON.parse(rawText) : null;
  } catch (_error) {
    if (!response.ok) {
      throw new Error(rawText || 'Unable to fetch chatbot response.');
    }

    throw new Error(
      import.meta.env.DEV
        ? 'Chatbot returned a non-JSON response. Check that the API URL points to a valid chatbot backend.'
        : 'Chatbot service is not configured on this deployment yet.',
    );
  }

  if (!response.ok) {
    throw new Error(data?.error || rawText || 'Unable to fetch chatbot response.');
  }

  return data;
}

export async function sendChatMessage(message, portfolioContext) {
  const endpoints = getChatbotEndpoints();
  let lastError = null;

  for (const endpoint of endpoints) {
    try {
      const data = await requestChatbot(endpoint, message, portfolioContext);
      return data.reply;
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    throw lastError;
  }

  throw new Error(
    import.meta.env.DEV
      ? `Chatbot backend is not reachable. Tried ${API_BASE_URL}/chatbot and local backend endpoints.`
      : 'Chatbot backend is currently unreachable. Please try again later.',
  );
}
