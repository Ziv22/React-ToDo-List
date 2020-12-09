import './App.css';
import { ToDosContext } from './context/toDosContext'
import ToDoStore        from './store/toDoStore'
import Container        from './components/Container'



function App() {
  const toDoStore = new ToDoStore()

  return (
    <ToDosContext.Provider value={toDoStore}>
      <div className="App">
        <Container/>
      </div>
    </ToDosContext.Provider>
  );
}

export default App;
