
import './App.css';
import Function from './components/functional';

function App() {
  return (
    <div className="App">
      <Function last_name = "Doe" first_name = "Jane" age = {45}  hair_color = "black"/>
      <Function last_name = "Smith" first_name = "John" age = {88}  hair_color = "brown"/>
      <Function last_name = "Fillmore" first_name = "Millard" age = {50}  hair_color = "brown"/>
      <Function last_name = "Smith" first_name = "Maria" age = {62}  hair_color = "black"/>
    </div>
  );
}

export default App;
