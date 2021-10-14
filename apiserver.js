const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { API_KEY, PORT } = require('./config');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('tiny'));

app.get('/weather/fetch/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.json({ status: error.response.status, message: error.message });
  }
});

app.use((req, res) => {
  res.status(400).json({ error: 'Not Found' });
});
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${3001}`);
});
