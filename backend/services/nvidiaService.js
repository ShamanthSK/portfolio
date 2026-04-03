const NVIDIA_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';
const MODEL = 'nvidia/nvidia-nemotron';

const buildSystemPrompt = (portfolioContext) => `
You are an AI assistant for a personal portfolio website.
Answer only using the provided portfolio context when possible.
Help visitors understand the student's background, projects, skills, education, achievements, and how to navigate the website.
Be concise, friendly, and informative.
If information is missing, say that the website owner can add it later rather than inventing facts.

Portfolio context:
${JSON.stringify(portfolioContext, null, 2)}
`;

async function askNvidiaAssistant({ message, portfolioContext }) {
  const apiKey = process.env.NVIDIA_API_KEY;

  if (!apiKey) {
    throw new Error('NVIDIA_API_KEY is missing in backend/.env');
  }

  const response = await fetch(NVIDIA_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.4,
      max_tokens: 500,
      messages: [
        {
          role: 'system',
          content: buildSystemPrompt(portfolioContext),
        },
        {
          role: 'user',
          content: message,
        },
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || 'NVIDIA API request failed.');
  }

  return (
    data?.choices?.[0]?.message?.content ||
    'I could not generate a response right now.'
  );
}

module.exports = {
  askNvidiaAssistant,
};
