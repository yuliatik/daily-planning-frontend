import { useEffect, useState } from 'react';
import './App.css';
import { MyTask } from './MyTask';
import { getAllTask, addTask, editDay, deleteDay } from './FetchTask';

function App() {

  const[myTask, setMyTask] = useState([]);
  const[name, setName] = useState("");
  const[editing, setEditing] = useState(false);
  const[taskId, setTaskID] = useState("");

  useEffect(() => {
  getAllTask(setMyTask)
  }, []);

  const updatingInput = (_id, name) => {
    setEditing(true)
    setName(name)
    setTaskID(_id)
  }

  
  return (
    
      <div className="container">
        <h1>Taskline</h1>
        <input type="text" 
        placeholder="Add a new task..." 
        value = {name}
        onChange = {(e) => setName(e.target.value)}/>

        <button 
        disabled={!name}
        onClick=
        {editing ? () => editDay(taskId, name, setName, setMyTask, setEditing) : () =>
        addTask(name, setName, setMyTask)}>
        {editing ? "Edit" : "Add"}
         </button>


       {myTask.map((task) => 
        <MyTask text= {task.name} key={task._id}
        updatingInput = {() => 
        updatingInput(task._id, task.name)}
        deleteDay={() => deleteDay(task._id, setMyTask)}/>
        )}
           </div>      
  
  )
}

export default App;


  
