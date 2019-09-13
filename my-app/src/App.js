import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {
        ["Sol","Leda","Mercedes","Isela","Churrumais"].map(nombre => <HolaAmigas>{nombre}</HolaAmigas>)
      }
    </div>
  );
}

class HolaAmigas extends React.Component {
  render(){
    return <p style={{color: 'red'}}>
      {this.props.children}
    </p>
  }
}

export default App;
