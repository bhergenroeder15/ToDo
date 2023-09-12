import { useState, useEffect } from "react";

import AddTask from "./components/AddTask.tsx"
import TaskList from "./components/TaskList.tsx";

function App() {

  const [completedSelector, setCompletedSelector] = useState(false)
  const [openTasks, setOpenTasks] = useState([])
  const [closedTasks, setClosedTasks] = useState([])

  useEffect(() => {
    fetch('/api/getTasks')
      .then((res) => res.json())
      .then((res) => {
        setOpenTasks(res.openTasks);
        setClosedTasks(res.closedTasks);
      })
      .catch((err) => {
        console.log('Error in fetching tasks:', err)
      })
  }, [])

  return (
    <div>
      <div className="jumbotron">
        <h1>To Do</h1>
        <h3>Keeping everything organized!</h3>

      </div>
      <AddTask _id="" taskName="" dueDate="" notes="" priority={false} edit={false}/>
      <div className="btn-group btn-group-lg">
        <button type="button" className="btn btn-info" onClick={() => {setCompletedSelector(false)}}>Not Completed</button>
        <button type="button" className="btn btn-success" onClick={() => {setCompletedSelector(true)}}>Completed</button>
      </div>
      <TaskList list={completedSelector ? closedTasks : openTasks}/>
    </div>
  )
}

export default App
