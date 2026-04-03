const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const chatbotRouter = require('./routes/chatbot');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio AI backend is running.',
  });
});

app.use('/api/chatbot', chatbotRouter);

app.listen(PORT, () => {
  console.log(`Portfolio AI backend running on http://localhost:${PORT}`);
});
