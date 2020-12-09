import { observer} from "mobx-react"
import { useContext} from "react";
import { ToDosContext } from "../context/toDosContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle , faTimesCircle  } from '@fortawesome/free-solid-svg-icons'

const AddToDoButton = observer(() => {
    const toDoStore = useContext(ToDosContext)
    return (
        <>
            {
                toDoStore.showAddToDoScreen 
                    ? <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="add-todo-button" 
                        onClick={toDoStore.switchAddToDo}
                      />
                    : <FontAwesomeIcon
                        icon={faPlusCircle}
                        className="add-todo-button" 
                        onClick={toDoStore.switchAddToDo}
                      />
            }
        </>
    );

})

export default AddToDoButton;
