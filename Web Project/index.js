const express = require('express');

const app = express();

app.get('/about', (req, res) => {
  res.send(`
    <h1>About Page<h1>

    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  `);
});

app.get('/about', (req, res) => {
  res.send('About us');
})

app.listen(3000);
console.log(`Server is listening op port 3000...`);