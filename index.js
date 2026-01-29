const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Software Factory Test App - Funcionando correctamente');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Test app listening at http://0.0.0.0:${port}`);
});