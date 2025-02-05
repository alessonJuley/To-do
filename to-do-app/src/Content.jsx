import {useState} from 'react';

function Content(){

          // stateful variables to add to list
          const [tasks, setTasks] = useState([]);
          const [newTask, setNewTask] = useState("");

          // callback for textbox input
          function handleInputChange(event){
                    setNewTask(event.target.value);
          }

          // onClick functions
          function addTask(){
                    // validate if task being added is empty
                    if(newTask.trim() !== ""){
                              // add task in tasks array
                              setTasks(prevTask => [...prevTask, newTask]);

                              // make textbox empty
                              setNewTask("");
                    }
                    else{
                              alert("Please do not add an empty task in the to-do list.");
                    }
          }

          function removeTask(index){
                    // use filter to remove the item
                    const updatedTasks = tasks.filter((_, i) => i !== index);

                    // update the tasks array
                    setTasks(updatedTasks);
          }

          // function for onClick checkbox
          function taskDone(index){
                    // if checkbox is checked
                              // index should go last element
                    // else
                              // index should stay current element
          }

          return(<div className="todo-container">
                    <h1>To-do List</h1>
                    <div className="todo-input">
                              <input type="text" className="task-input" placeholder="Type task..." value={newTask} onChange={handleInputChange}/>
                              <button onClick={addTask}>Add Task</button>
                    </div>
                    <ol>
                              {tasks.map((task, index) => <li key={index}>
                                        <input type="checkbox" />
                                        <span className="task-item">{task}</span>
                                        <button className="task-delete" onClick={removeTask}>Remove Task</button>
                              </li>)}
                    </ol>
          </div>)
}

export default Content;