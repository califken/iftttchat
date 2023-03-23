const {
  Configuration: Configuration,
  OpenAIApi: OpenAIApi,
} = require("openai");
require("dotenv").config();
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY }),
  openai = new OpenAIApi(configuration);
async function runCompletion(n) {
  return (
    await openai.createCompletion({
      model: "text-davinci-003",
      prompt: n,
      temperature: 0,
      max_tokens: 2000,
    })
  ).data.choices[0].text;
}
module.exports = { runCompletion: runCompletion };
