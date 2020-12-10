import {observer} from "mobx-react"
import {useContext , useEffect} from 'react'
import ToDo from "./ToDo.jsx"
import {ToDosContext} from '../context/toDosContext'

const ToDoList = observer(() => {
    const toDoStore = useContext(ToDosContext)
    const {toDos} = useContext(ToDosContext)
    const doneToDos = toDos.filter(t=> t.isdone === true)
    const unDoneToDos = toDos.filter(t=> t.isdone !== true)

    useEffect(() => {
        const func = async () =>{
            await toDoStore.fetchToDos()
        }
    
        func()
    }, [])

    return (
        <div className="toDosList">
            {
                toDos.length === 0 && (
                    <>
                        <p>No ToDos yet...  </p>
                        <p>Click on the + button on the bottom right to add one :) </p>
                    </>    
                    )
            }
            {
                unDoneToDos.length > 0  
                    ?   <>
                            <h1>To Do</h1>
                            {unDoneToDos.map((t,i) => <ToDo key={i} data={t}/>)}
                        </>
                    : null
            }
            {
                doneToDos.length > 0  
                    ?   <>
                            <h1>Done</h1>    
                            {doneToDos.map((t,i) => <ToDo key={i} data={t}/>)}
                        </>
                    : null
            }
        </div>
    )

})

export default ToDoList;
