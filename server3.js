const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Response from Server 3');
});

app.listen(3003, () => {
  console.log('Server 3 is listening on port 3003');
});