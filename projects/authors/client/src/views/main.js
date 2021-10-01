import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [albums, setAlbums] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/all")
            .then(res => {
                setAlbums(res.data.results);
                setLoaded(false)
            })
            .catch(err => console.log(err))
    }, [loaded])

    const onDeleteHandler = (_id) => {
        console.log(_id)
        axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
            .then(res => {
                console.log(res);
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Link to="/new">Add an author</Link>
            <p> We have quotes by: </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                {
                    albums.map((item, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link className="btn btn sm" to={`/${item._id}/edit`}> Edit </Link>
                                        <button onClick={() => onDeleteHandler(item._id)} to="/">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Main;