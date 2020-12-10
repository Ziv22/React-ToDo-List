import axios from 'axios'
import { uid } from 'uid';
class dbAPI{
    baseUrl = 'http://localhost:8080/toDo'
    getToDos = async () =>{
        try{
            const data = await axios.get(this.baseUrl+"s")
            return data.data
        }
        catch(err){
            return err
        }
    }
    add = async todo =>{
        try{
            const modifiedTodo = {...todo , id:uid(), isdone:false}
            const data = await axios.post(this.baseUrl , modifiedTodo)
            return data.data
        }
        catch(err){
            return err
        }
    }
    delete = async id =>{
        try{
            const data = await axios.delete(`${this.baseUrl}/${id}`)
            return data.data
        }
        catch(err){
            return err
        }
    }
    update = async (todo) =>{
        try{
            const data = await axios.put(`${this.baseUrl}/${todo.id}` , todo)
            return data.data
        }
        catch(err){
            return err
        }
    }
}

export default dbAPI