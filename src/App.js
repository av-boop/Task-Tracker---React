import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from "react"
import AddTask from './components/AddTask'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTasks] = useState( [
    {
        id:1,
        text:"doctors appointment",
        day:"5 feb at 2:30pm",
        reminder:true
    
    },
    
    {
        id:2,
        text:"meeting at school",
        day:"6 feb at 1:30pm",
        reminder:true
    
    },
    
    {
        id:3,
        text:"food shopping",
        day:"7 feb at 2:30pm",
        reminder:true
    
    }
    
    
    ]
   
    )

    //add task
    const addTask = (task) => {
      const id = Math.floor(Math.random()*10000)+1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    //delete function
    const deleteTask = (id) =>{

      setTasks(tasks.filter((i) => i.id!==id ))
     
    }

    //toggleReminder function

    const togglrReminder = (id) => {

      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }
  
  return (

    <div className="container">
   <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
  {showAddTask && <AddTask onAdd = {addTask} />}
   <Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {togglrReminder}/>
   </div>
  );
}

// //class component

// class App extends React.Component{
//   render(){

//     return <h1>hello from class component</h1>
//   }

// }

export default App;
