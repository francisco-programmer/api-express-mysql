import express  from "express"
import cors from 'cors'
import db from "./database/db.js"
import blogRouter from "./routes/routes.js"

const app = express()
const port = 8000
app.use(cors())
app.use(express.json())

app.use('/blogs', blogRouter)

try{
    db.authenticate()
    console.log('conexion exitosa con la db')

}catch(error){
    console.log(`el error en la conexion es, ${error}`)
}


app.listen(port, () => {
    console.log(`servidor conectado listening on port ${port}!`)
})