const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Software Factory Test App - Funcionando correctamente');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`);
});