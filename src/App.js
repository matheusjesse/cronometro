import Cronometro from './components/Cronometro';
import PresetMin from './components/PresetMin';
import Start from './components/Start';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleCronometro = this.handleCronometro.bind(this);

    this.state = {
      cronometroMin: '00',
      cronometroSec: '30',
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
    if(acc < 10) {
      this.setState({cronometroMin: `0${acc}`});
    }else{
      this.setState({cronometroMin: acc});
    }
  }

  handleCronometro() {
    const { cronometroMin, cronometroSec } = this.state;

    const sec = parseFloat(cronometroSec);
    const min = parseFloat(cronometroMin);

    if (sec > 0) {
      this.setState( { cronometroSec: sec -1 } );
    } else if ( min > 0) {
      this.setState( { cronometroSec: '59' } );
      if(min < 10) {
        this.setState({ cronometroMin:`0${min -1}`})
      }
    }

    setTimeout(this.handleCronometro, 1000);    
  }

  render() {
    const { cronometroMin, cronometroSec, presetMinUm, presetMinTres, presetMinSeis } = this.state;
    return (
      <>
        <Cronometro 
          cronometroMin={ cronometroMin }
          cronometroSec={ cronometroSec }
        />
        <PresetMin 
          handleClick={ this.handleClick } 
          presetMinUm={ presetMinUm }
          presetMinTres={ presetMinTres }        
          presetMinSeis={ presetMinSeis }
        />
        <Start
          handleCronometro={ this.handleCronometro }
        />
      </>
    );
  }    
}


export default App;
