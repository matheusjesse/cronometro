import Cronometro from './components/Cronometro';
import PresetMin from './components/PresetMin';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cronometroMin: '0',
      presetMinUm: '1',
      presetMinTres: '3',
      presetMinSeis: '6',
      presetSec: '30',
    };
  }

  render() {
    const { cronometroMin, presetMinUm } = this.state;
    return (
      <>
        <Cronometro 
          cronometroMin={ cronometroMin }
        />
        <PresetMin presetMinUm={ presetMinUm } />
      </>
    );
  }    
}


export default App;
