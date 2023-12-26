import logo from './logo.svg';
import './App.css';
import { Calculator } from "./Calculator";
import { Clock } from "./Clock.jsx";
import { Counter } from './Counter.jsx';

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <Clock />
      <Calculator />
    </div>
  );
}

export default App;
