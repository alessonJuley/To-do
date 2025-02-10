import {useState, useEffect} from 'react';
// make sure to install uuid by using 'npm install uuid' within the same level as package.json
import { v4 as randomID} from 'uuid';
const Content = () => {

          // =====================Default Values=====================
          // NOTE: Comment out after implementing localStorage and replace useState to empty object array 
          const todoList = [
                    {
                              id: randomID(),
                              taskItem: "Cook breakfast",
                              isChecked: false,
                    },
                    {
                              id: randomID(),
                              taskItem: "Take a shower",
                              isChecked: true,
                    },
                    {
                              id: randomID(),
                              taskItem: "Do laundry",
                              isChecked: false,
                    },
          ];

          const [tasks, setTasks] = useState(todoList);
          // =====================Default Values=====================

          // useEffect here

          // callbacks
          const handleAddTask = (event) => {
                    // validate if task being added is empty
                    // if(newTask.trim() !== ""){
                    //           // add task in tasks array
                    //           setTasks(prevTask => [...prevTask, newTask]);

                    //           // make textbox empty
                    //           setNewTask("");
                    // }
                    // else{
                    //           alert("Please do not add an empty task in the to-do list.");
                    // }
          }

          const handleRemoveTask = (id) => {
                    // use filter to remove the item
                    const updatedTasks = tasks.filter((_, i) => i !== index);

                    // update the tasks array
                    setTasks(updatedTasks);
          }

          const handleUpdateTask = (event, id) => {
                    // access the array and change isChecked depending on the state
          }


          return(<div className="todo-container">
                    <form id="todoForm" onSubmit={(event) => handleAddTask(event)} className="todo-input">
                              {/* name was used because name is considered as the key in the key-value pair of todo object array */}
                              {/* key: value = taskItem: eat */}
                              <input type="text" placeholder="Type task to add..." name="taskItem" className="task-input"/>
                    </form>
                    <button form="todoForm">
                              Add Task
                    </button>

                    {tasks.map((task, index) => {
                              return(
                                        <div key={task.id}>
                                                  <input type="checkbox" checked={task.isChecked} onChange={(event) => handleUpdateTask(event, task.id)}/>
                                                  <span className="task-item">{task.taskItem}</span>
                                                  <button className="task-delete" onClick={() => handleRemoveTask(task.id)}>
                                                            Remove Task
                                                  </button>
                                        </div>
                              );
                    })}

          </div>)
}

export default Content;