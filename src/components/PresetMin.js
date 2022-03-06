import React from "react";

class PresetMin extends React.Component {
  render() {
    const { presetMinUm, handleClick } = this.props;
    return (
      <input type='button' name='presetMinUm' onClick={ handleClick } value={ presetMinUm }/>
      
    );
  }
}

export default PresetMin;