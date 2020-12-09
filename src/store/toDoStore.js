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
        this.toDos[index].isDone = !this.toDos[index].isDone
    }

    editTodo = (id,title , description , priority) =>{
        const index = this._findIndexById(id)
        const currentToDo = this.toDos[index]
        if(title){
            currentToDo.title = title
        }
        if(description){
            currentToDo.description = description
        }
        if(  -1 > priority > 6 ){
            currentToDo.priority = priority
        }
    }
    switchAddToDo = () =>{
        this.showAddToDoScreen = ! this.showAddToDoScreen
    }
}


