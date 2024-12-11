const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Helper function to serve HTML files
const servePage = (page) => (req, res) => {
    res.sendFile(path.join(__dirname, `${page}.html`));
};

// Routes for your pages
app.get('/', servePage('index'));
app.get('/home', servePage('home'));
app.get('/about', servePage('about'));
app.get('/hub', servePage('hub'));
app.get('/events', servePage('events'));
app.get('/history', servePage('history'));
app.get('/glossary', servePage('glossary'));
app.get('/contact', servePage('contact'));

// Error Handling (404)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
