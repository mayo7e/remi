// const axios = require("axios")
import axios from "axios"
const { apiKey } = require("../constants");
// import {apiKey}  from "../constants";



const client = axios.create({
    timeout: 1000,
    headers: {
        "Authorization": "Bearer " +apiKey,
        "Content-Type": "application/json"
    }
})

const chatGptEndpoint = "https://api.openai.com/v1/chat/completions"


export const apiCall = async (prompt, messages)=>{
    try{
        const res = await client.post(chatGptEndpoint, {
            model: "gpt-3.5-turbo",
            messages : [{
                role: "user",
                content: `is  this prompt requesting to generate an image fie? ${prompt}. input yes or no`
            }]
        } )
        console.log(res.data)
    }catch(err){
            console.log("error", err)
            return Promise.all({success: false, msg: err.message})
    }

}