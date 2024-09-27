const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve the static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle apparel submission
app.post('/submit-apparel', (req, res) => {
    const { description, condition, action } = req.body;

    console.log('Received apparel submission:');
    console.log('Description:', description);
    console.log('Condition:', condition);
    console.log('Action:', action);

    if (!description || !condition || !action) {
        console.log('Error: Missing fields');
        return res.status(400).json({ error: 'All fields are required!' });
    }

    console.log('Apparel submitted successfully!');
    res.json({ message: 'Apparel submitted successfully!' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
