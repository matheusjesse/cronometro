import Cronometro from './components/Cronometro';
import PresetMin from './components/PresetMin';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      cronometroMin: '0',
      presetMinUm: '1',
      presetMinTres: '3',
      presetMinSeis: '6',
      presetSec: '30',
    };
  }

  handleClick({ target }) {
    //const { name, value } = target;
    const { cronometroMin, } = this.state;
    const acc = parseFloat(cronometroMin) + parseFloat(target.value);
    this.setState({cronometroMin: acc})
  }

  render() {
    const { cronometroMin, presetMinUm, presetMinTres, presetMinSeis } = this.state;
    return (
      <>
        <Cronometro 
          cronometroMin={ cronometroMin }
        />
        <PresetMin 
          handleClick={ this.handleClick } 
          presetMinUm={ presetMinUm }
          presetMinTres={ presetMinTres }        
          presetMinSeis={ presetMinSeis }
        />
      </>
    );
  }    
}


export default App;
