import AddTask from "./components/AddTask"
function App() {


  return (
    <div>
      <div className="jumbotron">
        <h1>To Do</h1>
        <h3>Keeping everything organized!</h3>

      </div>
      {<AddTask/>}
      <div className="btn-group btn-group-lg">
        <button type="button" className="btn btn-info">Not Completed</button>
        <button type="button" className="btn btn-success">Completed</button>
      </div>
    </div>
  )
}

export default App
