import React, { FC, ChangeEvent, useState } from 'react';
import './style.css';
import {ITask} from './Interfaces';
import TodoTask from './Components/TodoTask';


const App: FC = ()=>{

  const [task,setTask] = useState<string>("");
  const [deadline,setDeadline] = useState<number>(0);
  const [desc,setDesc] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [todoList,setTodoList] = useState<ITask[]>([]);

  const handleChange = (event : ChangeEvent<HTMLInputElement>): void =>{
    if(event.target.name === "task") {
    setTask(event.target.value) }
    else if(event.target.name === "desc") {
      setDesc(event.target.value) }
      if(event.target.name === "status") {
        setStatus(event.target.value) }
      else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = ():void =>{
    const newTask = {taskName : task, deadline : deadline, desc : desc, status : status };
  setTodoList([...todoList, newTask]);
  setTask("");
  setDeadline(0);
  setDesc("");
  setStatus("");
  };

  const completeTask = (taskNameToDelete : string): void => {
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== taskNameToDelete
    }))


  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Name" name="task" value={task} onChange={handleChange}/>
          <input type ="number" onChange={handleChange} value={deadline} name="deadline" placeholder="Age"/>
          <input type="text" placeholder="Description" name="desc" value={desc} onChange={handleChange}/>
          <input type="text" placeholder="Status" name="status" value={status} onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist"></div>
      <div className="todoList">
            {todoList.map((task: ITask, key:number)=> {
                return <TodoTask key={key} task={task} completeTask = {completeTask}/>
            })}

        </div>
    </div>
  )


}

export default App;
