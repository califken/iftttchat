const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function runCompletion (input) {
   const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input,
        temperature: 0,
        max_tokens: 1500,
    });
    return completion.data.choices[0].text;
}


module.exports = {
  runCompletion
}