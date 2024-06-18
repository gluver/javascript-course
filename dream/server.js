import * as dotenv from 'dotenv'

dotenv.config()
// console.log(process.env.IMG_URL)

import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

app.post('/dream',async (req,res)=>{
    try{  const prompt = req.body.prompt;
        const img=process.env.IMG_URL
        // res.send(prompt)
        await setTimeout(()=>{res.send({img:img})},1000)
    }
    catch(error){
        console.log(error)
        res.status(500).send(error?.response.data.error.message||"Something went wrong")    
    }
  
})

const port=8088
app.listen(port, ()=>{
    console.log(`Making art on http://localhost:${port}/dream`)
})

