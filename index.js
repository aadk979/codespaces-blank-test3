const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors());

// Serve static HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Test route that returns JSON data
app.get('/test', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
