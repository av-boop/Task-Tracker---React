import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    



    return (
        < >
        {tasks.map((i)=>(
        
        <Task task={i} onDelete={onDelete} 
        onToggle={onToggle}/>
        
        ))}
        </>
    )
}

export default Tasks

