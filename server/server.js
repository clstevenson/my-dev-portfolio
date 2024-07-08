const express = require('express');
const Mail = require("./send-email");

const PORT = process.env.PORT || 3001;

const app = express();

const path = require('path');

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if we're in production, serve client/dist as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  })
}

// POST request to send email
// body of request should have properties name, (email) address, and message
app.post('/api/mail', async (req, res) => {
  try {
    const infoResponse = await Mail(req.body);
    res.status(200).json(infoResponse);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
