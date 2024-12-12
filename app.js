const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemRoutes = require('./route/itemRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT} `);
});

module.exports = app;