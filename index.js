const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.OPENAI_API_KEY;
const endpoint = 'https://api.openai.com/v1/chat/completions';
//const endpoint = 'https://api.openai.com/v1/completions';
const MODEL = "gpt-3.5-turbo";

axios.post(endpoint, {
    model: MODEL,   //ID of the model to use
    messages: [     //List of messages comprising the conversation so far.
        {
            role: "system",
            content: "You are a perfectionist in programming. We are going to be on an Ethereum hackathon in Paris."
        },
        {
            role: "user",
            content: "Can you introduce yourself?"
        }
    ],
    max_tokens: 100,    //The maximum number of tokens to generate in the chat completion.
    temperature: 1,     //What sampling temperature to use, between 0 and 2. 
    top_p: 1,           //An alternative to sampling with temperature
    }, {
    headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${apiKey}`
    }
})
.then(response => {
    console.log(response.data.choices);
})
.catch(error => {
    if(error.response){
        console.log("HTTP response status code:", error.response.status);
        console.log("Response data:", error.response.data);
    }
    else{
        console.log(error.message);
    }
});