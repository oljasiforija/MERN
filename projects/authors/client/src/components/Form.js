import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const Form = (props) => {
    const history = useHistory();

    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        name: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            [event.target.name]: event.target.value
        })
    }
    const onClickHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", form)
            .then(res => {
                console.log(res);
                if (res.data.err) {
                    setErrors(res.data.err.errors)
                }
                else {
                    history.push("/")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form className="form-group">
                <div>
                    <input name="name" type="text" placeholder="Name of the author" onChange={onChangeHandler}></input>
                    <span className="alert-danger"> {errors.name && errors.name.message} </span>
                </div>
                <div>
                    <button onClick={onClickHandler}>Submit</button>
                    <button onClick={() => { history.push('/') }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default Form;