const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Response from Server 2');
});

app.listen(3002, () => {
  console.log('Server 2 is listening on port 3002');
});