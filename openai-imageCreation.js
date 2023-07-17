const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function createImage(){
    const response = await openai.createImage({
        prompt: "Two colourful toucan birds in a rain forest looking outsite the same tree hollow. ",
        n: 2,
        size: "1024x1024"
    });

    const imageUrls = response.data;

    console.log("Image URLs:", imageUrls);
}


createImage()
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