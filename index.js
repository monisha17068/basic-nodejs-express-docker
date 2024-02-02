const { Environment } = require('./environment.js');
const express = require('express');

const server = express();
const port = Environment.port || 3000;

server.get('/', (request, response) => {
    response.send('Hello Team! Deployment for node.js application is completed ');
});
  
server.listen(port, () => {
    console.log(`Server UP on port ${port}`);
});
