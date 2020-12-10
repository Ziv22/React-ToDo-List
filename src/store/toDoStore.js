import { action, makeAutoObservable, observable } from "mobx"
import  ToDo from "./toDo.js"
import  dbAPI from "./dbApi"

export default class ToDoStore{
    constructor(){
        this.toDos = []
        this.dbApi = new dbAPI()
        this.showAddToDoScreen = false
        
        makeAutoObservable(this,{
            toDos:              observable, 
            showAddToDoScreen:  observable, 
            switchDoneStatus:   action,
            fetchToDos:         action,
            switchAddToDo:      action,
            editTodo:           action,
            delete:             action,
            add:                action
        })
    }
    fetchToDos = async () =>{
        const data = await this.dbApi.getToDos()
        this.toDos = data 
        console.log(this.toDos);
    }

    _findIndexById = id =>{
        return this.toDos.findIndex(t => t.id === id)
    }

    add = async (title , description , priority) => {
        const newToDo = new ToDo(title , description , priority)
        await this.dbApi.add({title , description , priority})
        this.toDos.push(newToDo)
    }

    delete = async id =>{
        const index = this._findIndexById(id)
        await this.dbApi.delete(id)
        this.toDos.splice(index, 1)
    }

    switchDoneStatus = id =>{
        const index = this._findIndexById(id)
        const currentToDo = this.toDos[index]
        currentToDo.isdone = !currentToDo.isdone
        this.editTodo(currentToDo)
    }

    editTodo = async (todo) =>{
        const index = this._findIndexById(todo.id)
        this.toDos.splice(index, 1 , todo)
        await this.dbApi.update(this.toDos[index])
    }
    switchAddToDo = () =>{
        this.showAddToDoScreen = ! this.showAddToDoScreen
    }
}


