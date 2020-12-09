import { observer} from "mobx-react"
import { useContext, useState } from "react";
import { ToDosContext } from "../context/toDosContext";

const AddToDo = observer(() => {
    const toDoStore = useContext(ToDosContext)

    const [title, setTitle]             = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority]       = useState("")

    const clearFields = () =>{
        setDescription("")
        setPriority("")
        setTitle("")
    }

    const add = () =>{
        toDoStore.add(title, description, priority)
        toDoStore.switchAddToDo()
        clearFields()
    }

    return (
        <div className="add-todo-container">
            <div id="add-todo-modal">
                <h1 className="modal-title">Add a Todo</h1>
                <input onChange={e => setTitle(e.target.value)}       
                    autocomplete="off"
                    className="modal-input"
                    value={title}       
                    type="text" 
                    name="title"    
                    placeholder="Title"
                />

                <input onChange={e => setDescription(e.target.value)} 
                    autocomplete="off"
                    className="modal-input"
                    value={description} 
                    name="description"
                    type="text"     
                    placeholder="Description"
                />

                <input onChange={e => setPriority(e.target.value)}        
                    autocomplete="off"
                    className="modal-input"
                    value={priority}    
                    type="number"   
                    placeholder="priority"
                    name="priority"
                    min="1" 
                    max="5" 
                />

                <button onClick={add} id="modal-add-button">Add</button>
                <button onClick={toDoStore.switchAddToDo} className="close-modal">
                    X
                </button>
            </div>
        </div>
    );

})

export default AddToDo;
