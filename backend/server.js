const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());


app.get('/api/waitlist', (req, res) => {
  res.json({ message: 'Waitlist route is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
