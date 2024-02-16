import express from "express"
import http from "http"
import { fileURLToPath } from "node:url"
import { dirname,join } from "node:path"
import { Server } from "socket.io"
console.clear()
const app=express()
const server=http.createServer(app)
const __dirname=dirname(fileURLToPath(import.meta.url))
const io=new Server(server)
app.get('/',(req,res)=>res.sendFile(join(__dirname,'index.html')))

io.on('connection',(socket)=>{
    console.log("server connected 👻")
    socket.on("message",(message)=>{
        console.log(message)
    })

    socket.on("disconnect",()=>{
        console.log('user disconnected 🤬')
    })
})

const PORT=6969;
server.listen(PORT,console.log(`server running successfully at ${PORT}`))