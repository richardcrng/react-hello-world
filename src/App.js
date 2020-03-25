import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import Attribute from './components/Attribute'
import Superhero from './components/Superhero'
import './App.css';

function App() {
  console.log('hello world!')
  console.log("Here is another message!")

  return (
    <div>
      <div className="App">
        <h1>Superheroes</h1>
        <Superhero
          name='Spiderman'
          franchise='Marvel'
          powers='shoots web stuff and marries girl next door'
        />
      </div>
    </div>
  );
}

export default App;
