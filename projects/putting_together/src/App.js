import PersonCard from './components/prop_it_up';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard 
      first_name = "Jane" 
      last_name = "Doe" 
      age = {45}
      hair_color = "black"/>
      <PersonCard 
      first_name = "Smith" 
      last_name = "John" 
      age = {88}
      hair_color = "brown"/>
      <PersonCard 
      first_name = "Fillmore" 
      last_name = "Millard" 
      age = {50}
      hair_color = "brown"/>
      <PersonCard 
      first_name = "Smith" 
      last_name = "Maria" 
      age = {62}
      hair_color = "brown"/>
    </div>
  );
}

export default App;
