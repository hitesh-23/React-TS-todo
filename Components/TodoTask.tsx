import React from 'react'

import { ITask } from '../Interfaces'



interface props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}




const TodoTask= ({ task, completeTask } : props) => {
    return (<div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
            <span>{task.desc}</span>
            <span>{task.status}</span>
        </div>
        <button onClick={() => {completeTask(task.taskName)}}>X</button>
    </div>
       
    )
}

export default TodoTask