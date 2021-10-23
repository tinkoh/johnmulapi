const quotes = require('./quotes.json');
const express = require('express');
const subdomain = require('express-subdomain');
const cors = require('cors');

// Create app and router
const app = express();
let router = express.Router();
// Registers subdomain middleware for 'api.xyz.xyz'
app.use(subdomain('api', router));
app.use(cors());
router.use(cors());
// Fallback for all other routes to static page in 'client' dir
app.use(express.static('client'));
// Main express app
app.get('/', (req, res, next) => {
    if (req.subdomains.length > 0) {
        next();
    } else {
        res.send('Hello, world');
    }
});
// Main router app
router.get('/', (req, res) => {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    let json = JSON.stringify({ quote : quote });
    res.send(json);
});
// 404 fallback for all other endpoints
router.get('/*', (req, res) => {
    res.json({ error : {
        code : '404',
        message : 'This API does not have active endpoints.'
    }});
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
