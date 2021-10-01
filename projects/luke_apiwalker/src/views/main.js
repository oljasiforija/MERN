import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Main = (props) => {
    // const [results, setResults] = useState([]);
    const [id, setId] = useState("");
    const [option, setOption] = useState("people");
    const history = useHistory();
    const fetchApi = () => {
        axios.get("https://swapi.dev/api/" + option + "/" + id)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    const formHandler = (event) => {
        event.preventDefault();
        history.push(`/${option}/${id}`)

    }
    const onChangeHandler = (event) => {
        setOption (event.target.value);
        console.log(event);
        console.log(event.target.value)
    }
    const onChangeId = (event) => {
        setId (event.target.value);
        console.log(event)
    }
    return (
        <div>
            <form className="form1" onSubmit={formHandler}>
                <p>Search for: 
                    <select className="sel" value={option} onChange={onChangeHandler}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </p>
                <p> ID: <input onChange={onChangeId} type="number"></input></p>
                <button onClick={fetchApi}>Search</button>
            </form>
        </div>
    )
}
export default Main;