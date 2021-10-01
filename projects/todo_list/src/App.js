import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Task from './components/task';
import Input from './components/input';

function App() {
  const [tasks, setTasks] = useState([]);
  const displayTask = (item, i) => {
    return <Task text={item.text} checked={item.checked} deleteTask={deleteTask} checkTask={checkTask} key={i} idx={i}/>
  }
  const deleteTask = (id) => {
    console.log(id);
    setTasks([
      ...tasks.slice(0,id),
      ...tasks.slice(id + 1)
    ])
  }
  const checkTask = (id) => {
    console.log(id);
    const updatedTask = tasks[id];
    updatedTask.checked = !updatedTask.checked;
    setTasks([
      ...tasks.slice(0,id),
      updatedTask,
      ...tasks.slice(id + 1)
    ])
  }
  return(
    <div className="App">
      <h2> TO DO LIST </h2>
      <Input tasks={tasks} setTasks={setTasks}/>
      <div className="tasks">
        {
          tasks.map(displayTask)
        }
      </div>
    </div>
  
  )
}

export default App;
