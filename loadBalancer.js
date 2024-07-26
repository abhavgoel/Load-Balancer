const axios = require('axios');

class LoadBalancer{
    constructor(servers) {
        this.servers = servers;
        this.currentServerIndex = 0;
    }

    getServer() {
        return this.servers[this.currentServerIndex++ % Object.keys(this.servers).length];
    }

    async handleRequest(req, res) {
        const server = this.getServer();
        console.log(`Routing request to server: ${server.name}`);

        const options = { //options to send the http request
            url: `http://${server.hostname}:${server.port}${req.originalUrl}`, // Construct the URL
            method: req.method,
            headers: req.headers,
            data: req.body 
          };

        try {
            const response = await axios(options);
            
            res.writeHead(response.status, response.headers);
            res.end(response.data);

        } catch (error) {
            console.error('Error while sending request:', error.message);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        }
    }
}

module.exports = LoadBalancer;