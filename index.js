const quotes = require('./quotes.json');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    let json = JSON.stringify({ quote: quote });
    res.send(json);
});
let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// npm start index.js