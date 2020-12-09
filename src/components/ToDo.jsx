import { observer} from "mobx-react"
import { useContext } from "react";
import { ToDosContext } from "../context/toDosContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ToDo = observer((props) => {
    const toDoStore = useContext(ToDosContext)

    const switchDoneStatus = () =>{
        toDoStore.switchDoneStatus(props.data.id)
    }

    const deleteTodo = () =>{
        toDoStore.delete(props.data.id)
    }

    return (
        <div className={`todo-card ${props.data.isDone ? "isDone" : ""}`} >
            <div className="todo-content">
                <p className="todo-title">{props.data.title}</p>
                <hr/>
                <p className="todo-description">{props.data.description}</p>
                
            </div>
            <div className="todo-controllers">
                <input onClick={switchDoneStatus} type="checkbox" checked={props.data.isDone ? true : false}/>
                <FontAwesomeIcon   
                    onClick={deleteTodo}  
                    icon={faTrash} 
                />
            </div>
        </div>
    );

})

export default ToDo;
