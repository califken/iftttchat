const dotenvconfig = require('dotenv').config();
const config = {apiKey: process.env.OPENAI_API_KEY};
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration(config);
const openai = new OpenAIApi(configuration);
async function runCompletion (input) {
    const completion = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: input,
         temperature: 0,
         max_tokens: 1000,
     });
     return completion.data.choices[0].text;
 }
const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors');
const app = express()
const port =  process.env.PORT || 80;

app.use(morgan('combined'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json()); // Required to parse JSON request body
app.post('/api/request', async (req, res) => {
    try {
        let prompt = req.body.prompt;
        let completion = await runCompletion(prompt);
        res.send(completion);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));