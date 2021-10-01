import React from 'react';
const Task = (props) => {
    return(
        <div className="task">
            <h3 className={props.checked ? "strike" : ""}>{props.text}</h3>
            <input type="checkbox" checked={props.checked} onChange={() => props.checkTask(props.idx)} ></input>
            <button onClick={() => props.deleteTask(props.idx)}>Delete</button>
        </div>
    )

}


export default Task;