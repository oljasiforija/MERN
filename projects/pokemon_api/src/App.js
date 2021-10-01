import './App.css';
import {useState} from 'react';
import axios from 'axios';
function App() {
  const [results, setResults] = useState([]);

  const fetchApi = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(res=>{
      setResults(res.data.results)
    })
  }
  // const fetchApi = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res);
  //     setResults(res.results);
  //   })
  //   .catch(err => console.log(err));
  return (
    <div className="App">
      <button onClick = {fetchApi}>Fetch Pokemon</button>
      <ul>
        {results.map((item,i)=>{
          return <li key = {i}>{item.name} </li>
        })}
      </ul>
    </div>
  );
  }


export default App;
