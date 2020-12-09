import { uid } from 'uid';
import { makeAutoObservable, observable } from "mobx"

class ToDo{
    constructor(title , description , priority){
        this.id          = uid()
        this.isDone      = false
        this.title       = title
        this.description = description
        this.priority    = priority

        makeAutoObservable(this,{
            id:           observable, 
            isDone:       observable,
            title:        observable,
            description:  observable,
            priority:     observable
        })
    }
}

export default ToDo