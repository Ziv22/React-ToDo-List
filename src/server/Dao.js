import ToDo from "./model/ToDo.js"
import {client} from "../server.js"

class Dao{
    get     = async () =>{
        try{
            const query = 'SELECT * FROM todo'
            const res = await client.query(query)
            return res.rows
        }
        catch(err){
            return err 
        }
    } 
    
    insert  = async toDo =>{
        try{
            const query = `INSERT INTO todo VALUES('${toDo.id}','${toDo.title}', '${toDo.description}',${toDo.priority}, ${toDo.isDone})`
            const res = await client.query(query)
            const newMongoTodo = await new ToDo(toDo)
            newMongoTodo.save()
            return res.rows
        }
        catch(err){
            return err 
        }
        
    }

    update  = async (id,editedToDo) =>{
        try{
            const query = `UPDATE todo SET title = ${editedToDo.title}', description = '${editedToDo.description}',priority = ${editedToDo.priority},isDone = ${editedToDo.isDone} WHERE id = '${editedToDo.id}'`
            const res = await client.query(query)
            await ToDo.findByIdAndUpdate(id , editedToDo)
            return res.rows
        }
        catch(err){
            return err 
        }
    }

    delete  = async id =>{
        try{
            const query = `DELETE FROM todo WHERE id = '${id}'`
            const res = await client.query(query)
            await ToDo.deleteOne({id})
            return res.rows
        }
        catch(err){
            return err 
        }
    }

}

export default Dao