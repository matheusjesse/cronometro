import Cronometro from './components/Cronometro';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cronometroMin: '0',
    };
  }

  render() {
    const { cronometroMin } = this.state;
    return (
      
      <Cronometro 
        cronometroMin={ cronometroMin }
      />
    );
  }    
}


export default App;
