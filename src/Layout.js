import React, { useState } from 'react'
import './layout.css';
import Todolist from './Todolist';
const Layout = () => {

    /* Actually we would be wondering how the data is coming on task variable of hook.? <answer-->
    actually we are using onChange listener so when ever the user is writting anything in the input field we are setting that value using the setTask() methed and we are writting like this setTask(e.target.value) means what ever the user has written write it in the task hook thats why we are getting the hold of what ever the user is writting and then we are putting that value in the array uing the setTaskArray hook function. 
    This is why React is awesome ;)*/

    const [task, setTask] = useState(""); //keeps the track of what user is entering

    //state which is holding a array of task
    const [taskArray, setTaskArray] = useState([])  // keep the list of tasks which user has entered

    //we are setting what ever the user has entered in the input field in the task useState hook.
    //  value={task} this playes a very important role 
    const taskOnChange = (e) => {
        setTask(e.target.value)   ///when you start typing look at the value field of the input 
    }

    const submitTask = () => {
        //Here we are saying what ever is there till now in the taskArray just append the task again which user has entered and which is we are monitoring using the task useState Hook
        setTaskArray(taskArray.concat(task));
        //console.log(taskArray);
        setTask("");  // actually task is holding what ever we are writting in input field so after submission we are setting it to blank
    }

    //we are calling this method in the Todolist.js file on click 
    const deleteToDo=(id)=>{
        //console.log("clicked id is --> "+ id)
        
        //Updating the state of the task array
        let newTasksList=taskArray.filter((value,index)=>{
            return index!==id;
        });
        console.log("from console--> "+newTasksList)
        setTaskArray(newTasksList);  //setting the state of the taskArray after the user has clicked on the deleted icon
    }

    return (

        <div className="main-div">
            <div className="center-div">
                <h3>To Do List Using React JS</h3>
                <input type="text" placeholder="Enter your to-do tasks!!" value={task} onChange={taskOnChange} />
                <button onClick={submitTask} disabled={task.length<1} > <span style={{fontWeight:"bolder",fontSize:"20px"}} >+</span></button>
                 {/* <ol> -----------------------------Without the delete button and extra componenet
                  The Below li will help us to show what ever we are writting 
                   
                    {
                        taskArray.map((tsk,index)=>{
                            return <li>{index} {tsk}</li>
                        })
                    }
                </ol>*/}
                {/* When we want to see in the output when ever user writes something write below line */}
                <li>{task}</li>
                {/* We could use map and filter method on the array it returns and function having argumentes as currentValue,index --> map callback alwyas returns somthing thats why we have to write return in map */}
                <ol>
                    {
                        taskArray.map((tsk,index)=>{
                            return <Todolist tsk={tsk} key={index} id={index} deleteToDo={deleteToDo}/>
                        }) 
                    }
                </ol>

            </div>
        </div>


    )
}

export default Layout
