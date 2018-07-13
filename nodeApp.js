const path = require('path');
const express = require('express');
const app = express();

// Load static files
app.use(express.static('public'));
//app.use('/npmScripts', express.static(path.join(__dirname, '/node_modules/')));

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
