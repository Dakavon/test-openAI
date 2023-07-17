const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const fs = require("fs");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function createImageVariation(){
    const response = await openai.createImageVariation(
        fs.createReadStream("raccoon.png"),
        2,
        "1024x1024"
    );

    const imageUrls = response.data;

    console.log("Image URLs:", imageUrls);
}


createImageVariation()
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