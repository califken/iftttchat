const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const ai = require("./answer");

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/status', (req, res) => {
    res.send('Server is up');
});

app.post('/api/request', async (req, res) => {
    let prompt = req.body.prompt;
    let completion = await ai.runCompletion(prompt);
    res.json(completion);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));