import React, {useState} from 'react';

function ToAddItems(){
          

          const [tasks, setTasks] = useState(["Eat", "Shower", "Sleep"]);

          function handleAddTask(){
                    const newTask = document.getElementById("tasksInput").value;
                    
                    if(newTask === ""){
                              console.log("empty task");
                    }
                    else{
                              setTasks(prevTasks => [...prevTasks, newTask]);
                    }
                    
                    document.getElementById("tasksInput").value = "";
          }

          function handleRemoveTask(index){
                    setTasks(tasks.filter((_, i) => i !== index));
          }

          function handleEditTask(index){
                    console.log("Edit task");
          }

          return(<div>
                    <input type="text" className="task-textbox" id="taskInput" placeholder="Some task"/>
                    <button className="task-button" onClick={handleAddTask}>Add tasks</button>

                    <div className="list-container">
                              <input type="checkbox"/>
                              <div className="task-item">item</div>
                              <button className="task-action" onClick={handleRemoveTask}>Remove Task</button>
                              <button className="task-action" onClick={handleEditTask}>Edit Task</button>
                    </div>

                    <div className="list-container">
                              <input type="checkbox"/>
                              <div className="task-item">iteasdfasdfsadm</div>
                              <button className="task-action" onClick={handleRemoveTask}>Remove Task</button>
                              <button className="task-action" onClick={handleEditTask}>Edit Task</button>
                    </div>

                    <div className="list-container">
                              <input type="checkbox"/>
                              <div className="task-item">iteasdfasm</div>
                              <button className="task-action" onClick={handleRemoveTask}>Remove Task</button>
                              <button className="task-action" onClick={handleEditTask}>Edit Task</button>
                    </div>
          </div>);
}

export default ToAddItems;