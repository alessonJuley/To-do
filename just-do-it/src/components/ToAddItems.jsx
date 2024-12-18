import React, {useState} from 'react';

function ToAddItems(){
          
          const [tasks, setTasks] = useState(["Eat", "Shower", "Sleep"]);

          // Create
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

          // Update
          function handleEditTask(index){
                    console.log("Edit task");
          }

          // Delete
          function handleRemoveTask(index){
                    setTasks(tasks.filter((_, i) => i !== index));
          }

          // Put completed task at the last 
          function handleDoneTask(index){
                    setTasks();
          }

          return(<div>
                    <input type="text" className="task-textbox" id="tasksInput" placeholder="Some task"/>
                    <button className="task-button" onClick={handleAddTask}>Add tasks</button>

                    {/* <div className="list-container">
                              <input type="checkbox"/>
                              <div className="task-item">item</div>
                              <button className="task-action" onClick={handleRemoveTask}>Remove Task</button>
                              <button className="task-action" onClick={handleEditTask}>Edit Task</button>
                    </div> */}

                    <div className="list-container">
                              <ul>
                                        {tasks.map((task, index) => <li key={index}> <input type="checkbox"/> {task} <button className="task-action" onClick={() => handleRemoveTask(index)}>Remove Task</button> <button className="task-action" onClick={handleEditTask}>Edit Task</button>
                                                                      
                                                            </li>)}
                              </ul>
                    </div>
          </div>);
}

export default ToAddItems;