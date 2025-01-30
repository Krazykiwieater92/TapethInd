const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'main.html'));
});

// Example API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});