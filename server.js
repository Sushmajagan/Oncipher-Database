const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

let results = [];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // serve index.html, game.html, etc.

app.post('/submit', (req, res) => {
  const { user, score } = req.body;
  results.push({ user, score });
  res.json({ message: 'Score submitted successfully' });
});

app.get('/scores', (req, res) => {
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
