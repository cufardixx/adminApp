import express from "express"
import 'dotenv/config'
import routers from "./routes"
import connectDB from "./db/connect"
import cors from "cors"


const app = express()
connectDB()
app.use(cors())
const PORT = process.env.PORT || 4000

app.use("/api", routers) //api/auht/...

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${PORT}`); 
})


