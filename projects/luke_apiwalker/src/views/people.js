import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const People = (props) => {
    const {id} = useParams();
    const[results, setResults] = useState("")

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
        .then(res => {
            setResults(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))

    }, [])
    return(
        <div className="form1">
            <h3>Name: {results.name}</h3>
            <p>Hair color: {results.hair_color}</p>
            <p>Birth year: {results.birth_year}</p>
            <p>Height: {results.height}</p>
        </div>
        
    )
}
export default People;