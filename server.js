const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
