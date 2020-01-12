const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
require('dotenv/config');

const vehiclesRoute = require('./routes/vehicles');

// Middleware
app.use(morgan('dev'));

app.use(express.json());

// Routes
app.use('/vehicles', vehiclesRoute);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500)
    .json({ error: { message: 'hi' } });
});

// Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Connected to database...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));