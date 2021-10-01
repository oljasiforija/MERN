import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Planet = (props) => {
    const {id} = useParams();
    const[results, setResults] = useState("")

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id)
        .then(res => {
            setResults(res.data)
            console.log(res.data.name)
        })
        .catch(err => console.log(err))

    }, [])
    return(
        <div className="form1">
            <p> Planet Name: {results.name}</p>
            <p> Population: {results.population}</p>
            <p> Climate: {results.climate}</p>
            <p> Terrain: {results.terrain}</p>
        </div>
    )
}
export default Planet;