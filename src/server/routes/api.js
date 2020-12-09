import express  from "express" 
import Dao     from "../Dao.js"

const router    = express.Router()
const dao       = new Dao()

router.get("/toDos", async (req,res) =>{
    try{
        const toDos = await dao.get()
        res.send(toDos)        
    }
    catch(err){
        console.log(err)
    }
})
router.post("/toDo", async (req,res) =>{
    try{
        const newToDo = await dao.insert(req.body)
        res.send(newToDo)
    }
    catch(err){
        console.log(err)
    }
})
router.put("/toDo/:id", async (req,res) =>{
    try{
        const toDos = await dao.update(req.params.id, req.body)
        res.send(toDos)
    }
    catch(err){
        console.log(err)
    }
})
router.delete("/toDo/:id", async (req,res) =>{
    try{
        const toDos = await dao.delete(req.params.id)
        res.send(toDos)
    }
    catch(err){
        console.log(err)
    }
})

export default router
