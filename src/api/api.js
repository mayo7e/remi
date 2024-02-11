import axios from "axios";
import dotenv  from "dotenv"

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://192.168.10.100:5000/api"
    : "http://localhost:5000/api";


  const instance = axios.create({
    // baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
  });

      export const fetchData = async ()=>{
            try{
              const response = await instance.get(API_URL)
                  console.log(response.data)
            }catch(err){
              console.log("error", err)
              return Promise.all({success: false, msg: err.message})
            }
      }
 