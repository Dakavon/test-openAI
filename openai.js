const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function call(){
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a perfectionist in programming. We are going to be on an Ethereum hackathon in Paris."
            },
            {
                role: "user",
                content: "Can you introduce yourself?"
            }
        ],
    });
    console.log(chatCompletion.data.choices[0].message.content);
}


call()
.then(() => {
    process.exit(0);
})
.catch((error) => {
    if(error.response){
        console.log("HTTP response status code:", error.response.status);
        console.log("Response data:", error.response.data);
    }
    else{
        console.log(error.message);
    }
    process.exit(1);
})
