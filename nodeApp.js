const express = require('express');
const app = express();

// Load views
app.use(express.static('views'));

// Error handling
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    err:{
      message: err.message
    }
  });
});

 module.exports = app;
