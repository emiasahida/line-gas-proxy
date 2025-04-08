const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const GAS_URL = process.env.GAS_URL;

app.post('/webhook', async (req, res) => {
  try {
    const response = await axios.post(GAS_URL, req.body);
    res.status(200).send('OK');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error forwarding to GAS');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
