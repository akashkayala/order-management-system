const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orders');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/orders', orderRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
