import Cronometro from './components/Cronometro';
import PresetMin from './components/PresetMin';
import Start from './components/Start';
import Restart from './components/Restart';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleCronometro = this.handleCronometro.bind(this);
    this.handleRestart= this.handleRestart.bind(this);

    this.state = {
      cronometroMin: '00',
      cronometroSec: '00',
      presetMinUm: '1',
      presetMinTres: '3',
      presetMinSeis: '6',
      presetSec: '30',
      buttonDisabled: false,
      cronometroOn: true,
    };
  }

  handleClick({ target }) {
    //const { name, value } = target;
    const { cronometroMin, cronometroOn } = this.state;
    const acc = parseFloat(cronometroMin) + parseFloat(target.value);
    
    if(cronometroOn === false) {
      this.setState({ cronometroOn: true});   
    }
    if(acc < 10) {
      this.setState({cronometroMin: `0${acc}`});
    }else{
      this.setState({cronometroMin: acc});
    }
  }

  handleCronometro() {
    const { cronometroMin, cronometroSec, buttonDisabled, cronometroOn } = this.state;

    const sec = parseFloat(cronometroSec);
    const min = parseFloat(cronometroMin);
    const validCronometro = sec + min;

    if(buttonDisabled === false && validCronometro > 0) {
      this.setState({ buttonDisabled: true });
    }
    if (sec > 0) {
      this.setState( { cronometroSec: sec -1 } );      
      if(sec < 10) {
        this.setState({ cronometroSec:`0${sec -1}`})
      }
    } else if ( min > 0) {
      this.setState( { cronometroSec: '59' } );
      if(min < 10) {
        this.setState({ cronometroMin:`0${min -1}`})
      }
    }
    
    if(cronometroOn === true){
      setTimeout(this.handleCronometro, 1000);    
    }
  }

  handleRestart() {
    const { buttonDisabled, } = this.state;
    
    if( buttonDisabled === true) {
      this.setState( {
        buttonDisabled: false, 
        cronometroMin: '00',
        cronometroSec: '00',
        presetSec: '00',
        cronometroOn: false});
    }
  }

  render() {
    const { buttonDisabled, cronometroMin, cronometroSec, presetMinUm, presetMinTres, presetMinSeis } = this.state;
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
          buttonDisabled={ buttonDisabled }
        />
        <Start
          handleCronometro={ this.handleCronometro }
          buttonDisabled={ buttonDisabled }
        />
        <Restart
          handleRestart={ this.handleRestart }
        />
      </>
    );
  }    
}


export default App;
