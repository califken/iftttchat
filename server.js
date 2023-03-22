const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    let request = req.body
    res.json(request);
}); 


app.get('/api/:r1', (req, res) => {
    // reading isbn from the URL
    const r1 = req.params.r1;
    res.json(r1);
});

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));