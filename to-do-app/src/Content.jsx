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
                    // prevent page reload on form submission
                    event.preventDefault();

                    // take values from form input
                    const data = new FormData(event.target);
                    const newTaskItem = data.get("taskItem");
                    const newTask = {
                              id: randomID(),
                              taskItem: newTaskItem,
                              isChecked: false,
                    };

                    // validate if task being added is empty
                    if(newTask.taskItem.trim() !== ""){
                              // add to object array
                              setTasks(prevTask => [...prevTask, newTask]);
                    }
                    else{
                              alert("Please do not add an empty task in the to-do list.");
                    }

                    console.log(tasks);
          }

          const handleRemoveTask = (idTaken) => {
                    // use filter to remove the item
                    const updatedTasks = tasks.filter((task) => task.id !== idTaken);

                    console.log(updatedTasks);
                    
                    // update the tasks array
                    setTasks(updatedTasks);
          }

          const handleUpdateTask = (event, idTaken) => {
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