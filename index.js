const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.OPENAI_API_KEY;
const endpoint = 'https://api.openai.com/v1/chat/completions';
//const endpoint = 'https://api.openai.com/v1/completions';
const MODEL = "gpt-3.5-turbo";

axios.post(endpoint, {
    model: MODEL,
    messages: [
        {
            role: "system",
            content: "You are a perfectionist in programming. We are going to be on an Ethereum hackathon in Paris."
        },
        {
            role: "user",
            content: "Can you introduce yourself?"
        }
    ]}, {
    headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${apiKey}`
    }
})
.then(response => {
    console.log(response.data.choices);
})
.catch(error => {
    console.error("ERROR:\n:", error);
});