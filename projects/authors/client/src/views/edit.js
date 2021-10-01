import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router";
const Edit = (props) => {
    const {_id} = useParams();
    const [form,setForm] = useState({
        name:""
    })
    const history = useHistory();
    const[errors,setErrors]=useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(res=>{
            console.log(res);
            setForm(res.data.results)
        })
        .catch(err=>console.log(err))
    },[_id])

    const onChangeHandler = (event) =>{
        setForm({
            [event.target.name]:event.target.value
        })
    }
    const onClickHandler = (event) => {
        event.preventDefault();
        console.log(_id);
        axios.patch(`http://localhost:8000/api/authors/${_id}/update`,form)
        .then(res=>{
            console.log(res);
            if(res.data.err){
                // console.log(res.data.err.errors)
                setErrors(res.data.err.errors.name)
            }
            else{
                history.push("/")
            }
            })
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <form className="form-group">
                <div>
                <h3>Edit me</h3>
                <input name="name" type="text"  onChange={onChangeHandler} value={form.name}></input>
                <span className="alert-danger">{errors.message} </span>
                </div>
                <div>
                <button onClick={onClickHandler}>Submit</button>
                <button onClick={()=>{history.push('/')}}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default Edit;