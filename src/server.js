import express      from "express"  
import bodyParser   from "body-parser"
import api          from "./server/routes/api.js"
import mongoose     from "mongoose"
import pg from 'pg'

const port  = 8080;
const app   = express() 

export const client = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todolist',
    port: 5432,
})

client.connect()
.then(() => {
    console.log('pg DB Connected!')
})
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`)
})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

mongoose.connect('mongodb://localhost:27017/toDoList', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`)
})
  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/" , api)

app.listen(port, ()=>{
    console.log(`Server is Running on port ${port}`);
})

