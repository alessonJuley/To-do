import React, {useState} from 'react';

function ToAddItems(){
          

          return(<div> 
                    <form className="to-do-form">
                              <input type="text" name="item" placeholder="Add a task" ></input>
                              <input type="submit" value="Submit"></input>
                    </form>
                    <label className="to-do-label">Here are thing you need to complete by this week:</label>
                    <div className="tasks">
                             
                    </div>
          </div>);
}

export default ToAddItems;