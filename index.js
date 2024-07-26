//file to specify the server and entry point of requests

const express = require('express');
const LoadBalancer = require('./loadBalancer.js');

const app = express();
const servers = [
  { name: 'Server 1', port: 3001 , hostname: "localhost"},
  { name: 'Server 2', port: 3002 , hostname: "localhost"},
  { name: 'Server 3', port: 3003 , hostname: "localhost"},
];

const loadBalancer = new LoadBalancer(servers);

app.use((req, res) => {
    loadBalancer.handleRequest(req, res);
});

app.listen(3000, () => {
    console.log('Load balancer is listening on port 3000');
});
