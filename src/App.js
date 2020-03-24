import React from 'react';
import Attribute from './components/Attribute'
import Superhero from './components/Superhero'
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <h1>Superheroes</h1>
        <Superhero
          name='Spiderman'
          franchise='Marvel'
          powers='shoots web stuff and marries girl next door'
        />
        <Attribute
          text='Enemy'
          value='Mysterio'
        />
        <Attribute
          text='Colour'
          value='Red'
        />
        <br />
        <Superhero
          name='Batman'
          enemy='Joker'
        />
      </div>
    </div>
  );
}

export default App;
