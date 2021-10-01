import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
const New = (props) => {
    return(
        <div>
            <Link to="/"> Home </Link>
            <Form/>
        </div>
    )
}
export default New;