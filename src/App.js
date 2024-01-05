import logo from './logo.svg';
import './App.css';
import { Calculator } from "./Calculator";
import { Clock } from "./Clock.jsx";
import { Counter } from './Counter.jsx';
import {React} from 'react'
import { createContext } from 'react';

// const ThemeContext = React.createContext(theme.dark)

const theme = {
  dark: {
    background: '#000',
    color: "#FFF"
  },
  light: {
    background: '#FFF',
    colors: '#000'
  }
}

// function ToolBar ({theme}){
//   return <div>
//     <ThemedButton>M'inscrire</ThemedButton>
//   </div>
// }

// function ThemedButton ({children}) {
//   return <ThemeContext.Consumer>
//     {value => {
//       return <button style={value}>{children}</button>
//     }}
//   </ThemeContext.Consumer>
// }

function App() {
  return (
    <div className="App">
      <Clock />
      <Calculator />
    </div>
  );
}

export default App;
