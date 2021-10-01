import React, { useState } from 'react';
const Input = (props) => {
    const [currentTask, setCurrentTask] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(currentTask);

        const newTask ={
            text: currentTask,
            checked: false
        }
        props.setTasks([...props.tasks,newTask])
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" onChange={(event) => setCurrentTask(event.target.value)}></input>
                <input type="submit"></input>
            </div>
        </form>
    )

}


export default Input;