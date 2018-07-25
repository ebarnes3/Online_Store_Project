const http = require('http');

const app = require('./nodeApp');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server created at port: ' + port);
});
