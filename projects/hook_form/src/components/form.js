import React, { useState } from 'react';

const Form = (props) => {
    const[first_name, setFirstName] = useState("");
    const[last_name, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password,setPassword] = useState("")
    const[confirm_password,setConfirmPassword] = useState("")



    const createUser = (e) => {
        e.preventDefault();
    }
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    return (
        <div className="container">
            <form onSubmit={createUser}>
                <div className="label">
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName}></input>
                </div>
                {first_name.length < 2 && first_name.length !== 0 ? <span>First Name needs to be at least 2 characters long.</span> : ""}
                <div className="label">
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName}></input>
                </div>
                {last_name.length < 2 && last_name.length !== 0  ? <span>Last Name needs to be at least 2 characters long.</span> : ""}
                <div className="label">
                    <label>Email: </label>
                    <input type="text" onChange={handleEmail}></input>
                </div>
                {email.length < 5  && email.length !== 0 ? <span>Email needs to be at least 5 characters long.</span> : ""}
                <div className="label">
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword}></input>
                </div>
                {password < 8 && password.length !== 0 ? <span>Password needs to be at least 8 characters long.</span> : ""}
                <div className="label">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handleConfirmPassword}></input>
                </div>
                {password != confirm_password ? <span>Passwords not matching.</span> : ""}
                <input type="submit" value="Create User"></input>
            </form>
        </div>
    )
}
export default Form