const express = require('express');
const Mail = require("./sendEmail");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST request to send email
app.post('/api/mail', async (req, res) => {
  try {
    const infoResponse = await Mail(req.body);
    res.status(200).json(infoResponse);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
