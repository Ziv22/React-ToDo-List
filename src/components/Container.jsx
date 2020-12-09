import ToDoList         from './ToDoList'
import AddToDo          from './AddToDo'
import AddToDoButton    from './AddToDoButton'
import { ToDosContext } from "../context/toDosContext";
import { useContext}    from "react";
import { observer}      from "mobx-react"

const Container = observer ( () =>{
    const toDoStore = useContext(ToDosContext)
    return (
        <>
            <h1> <u> <b>Todo List</b></u> </h1>
            {toDoStore.showAddToDoScreen && <AddToDo/>}
            <ToDoList/>
            <AddToDoButton/>
        </>
    );
})

export default Container;
