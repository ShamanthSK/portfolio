const NVIDIA_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';
const MODEL = 'nvidia/nvidia-nemotron-nano-9b-v2';

const buildSystemPrompt = (portfolioContext) => `
You are an AI assistant for a personal portfolio website.
Answer only using the provided portfolio context when possible.
Help visitors understand the student's background, projects, skills, education, certifications, achievements, and how to navigate the website.
Be concise, friendly, and informative.
If information is missing, say that the website owner can add it later rather than inventing facts.

Portfolio context:
${JSON.stringify(portfolioContext, null, 2)}
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const { message, portfolioContext } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'A message is required.' });
    }

    const apiKey = process.env.NVIDIA_API_KEY;

    if (!apiKey || apiKey === 'your_nvidia_api_key_here') {
      return res.status(500).json({
        error: 'Set NVIDIA_API_KEY in Vercel environment variables to enable the chatbot.',
      });
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

    const rawText = await response.text();
    let data = null;

    try {
      data = rawText ? JSON.parse(rawText) : null;
    } catch (_error) {
      data = null;
    }

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || rawText || 'NVIDIA API request failed.',
      });
    }

    return res.status(200).json({
      reply:
        data?.choices?.[0]?.message?.content ||
        'I could not generate a response right now.',
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Unable to reach the AI assistant.',
    });
  }
}
