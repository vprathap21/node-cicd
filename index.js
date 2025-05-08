const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js deployed via GitHub Actions!   empethetics towards in your career  in genral towards life');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
