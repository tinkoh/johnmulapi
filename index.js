const quotes = require('./quotes.json');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    let json = JSON.stringify({ quote : quote });
    res.send(json);
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
