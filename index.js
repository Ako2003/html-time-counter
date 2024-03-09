const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


// Serve static files from the directory containing index.html
app.use(express.static(path.join(__dirname)));

// Define route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/files/index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});