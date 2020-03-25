import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import Attribute from './components/Attribute'
import Superhero from './components/Superhero'
import './App.css';

function App() {
  console.log('hello world!')

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
        <button>Here is my button</button>
        <Button>Click here</Button>
      </div>
      <Card>
        <Image src='/assets/logo512.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
        22 Friends
      </a>
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;
