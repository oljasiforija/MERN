import React, { useState } from 'react'

const Box = (props) => {
    const [backgroundColor, setBackgroundColor] = useState("");


const createBox = (e) => {
    e.preventDefault();
    console.log('clicked')
    
}
const changeBackground = (e) => {
    setBackgroundColor(e.target.value);

}

    return (
        <div>
            <form onSubmit={createBox}>
                <div className="header">
                    <label>Color: </label>
                    <input type="text" onChange={changeBackground} name="backgroundColor"></input>
                    <button>Add</button>
                </div>
                <div className="container">
                    <div className = "box"> </div>
                </div>
            </form>
        </div>
    )
}

export default Box