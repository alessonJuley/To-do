import {useState, useEffect} from 'react';
// make sure to install uuid by using 'npm install uuid' within the same level as package.json
import { v4 as randomID} from 'uuid';
const Content = () => {

          // =====================Default Values=====================
          // NOTE: Comment out after implementing localStorage and replace useState to empty object array 
          // const todoList = [
          //           {
          //                     id: randomID(),
          //                     taskItem: "Cook breakfast",
          //                     isChecked: false,
          //           },
          //           {
          //                     id: randomID(),
          //                     taskItem: "Take a shower",
          //                     isChecked: true,
          //           },
          //           {
          //                     id: randomID(),
          //                     taskItem: "Do laundry",
          //                     isChecked: false,
          //           },
          // ];

          // const [tasks, setTasks] = useState(todoList);
          // =====================Default Values=====================

          const [tasks, setTasks] = useState([]);

          // when the component mounts, execute this 
          useEffect(() => {
                    
                    const localData = localStorage.getItem('tasksLocalStorage');

                    if(localData){
                              setTasks(JSON.parse(localData));
                    }
          }, []);

          // when tasks array value changes, execute this
          useEffect(() => {
                    
                    if(tasks.length > 0){
                              localStorage.setItem('tasksLocalStorage', JSON.stringify(tasks));

                    }

          }, [tasks]);


          // callbacks
          const handleAddTask = (event) => {
                    // prevent page reload on form submission
                    event.preventDefault();

                    // take values from form input
                    const data = new FormData(event.target);
                    const newTaskItem = data.get("taskItem");         // taskItem found under input name="taskItem"
                    const newTask = {                                 // create object variable and set values taken from form
                              id: randomID(),
                              taskItem: newTaskItem,
                              isChecked: false,                       // set tasks as not checked when being added first
                    }

                    // validate if task being added is an empty input
                    if(newTask.taskItem.trim() !== ""){

                              // check if task being added is the first item in an empty tasks array
                              // we check this because mapping won't work in an empty array :)
                              if(tasks.length === 0){
                                        setTasks(prevTask => [...prevTask, newTask]);
                              }
                              else{
                                        // validate if task being added is a duplicate in tasks array
                                        let flag = true;

                                        tasks.map((task) => {
                                                  if(newTaskItem === task.taskItem){
                                                            alert("Task is already in the list.");

                                                            flag = false;
                                                  }
                                        });

                                        if(flag == true){
                                                  setTasks(prevTask => [...prevTask, newTask]);
                                        }
                              }                              

                              // clear textbox after adding task in the list
                              event.target.reset();
                    }
                    else{
                              alert("Please do not add an empty task in the to-do list.");
                    }

          }

          const handleRemoveTask = (idTaken) => {
                    // use filter to remove the item
                    const updatedTasks = tasks.filter((task) => task.id !== idTaken);
                    
                    // update the tasks array
                    setTasks(updatedTasks);

                    // update localStorage 
                    if(tasks.length === 1){
                              localStorage.setItem('tasksLocalStorage', JSON.stringify(updatedTasks));
                    }
          }

          const handleUpdateTask = (event, idTaken) => {
                    // access the array and change isChecked depending on the state
                    const sortedTasks = tasks.map((task) => {
                              if(idTaken === task.id){
                                        task.isChecked = event.target.checked;
                              }
                              
                              return task;
                    });

                    sortedTasks.sort((a, b) => a.isChecked - b.isChecked);

                    setTasks(sortedTasks);
          }


          return(<div className="todo-container">
                    <form id="todoForm" onSubmit={(event) => handleAddTask(event)} className="todo-input">
                              {/* name was used because name is considered as the key in the key-value pair of todo object array */}
                              {/* key: value = taskItem: eat */}
                              <input type="text" name="taskItem" placeholder="Type task to add..." className="task-input"/>
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