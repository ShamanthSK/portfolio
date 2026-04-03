const express = require('express');
const { askNvidiaAssistant } = require('../services/nvidiaService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message, portfolioContext } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'A message is required.' });
    }

    const reply = await askNvidiaAssistant({
      message,
      portfolioContext,
    });

    return res.json({ reply });
  } catch (error) {
    console.error('Chatbot route error:', error);
    return res.status(500).json({
      error: error.message || 'Unable to reach the AI assistant.',
    });
  }
});

module.exports = router;
