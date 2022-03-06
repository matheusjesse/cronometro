import React from "react";

class PresetMin extends React.Component {
  render() {
    const { presetMinUm, presetMinTres, presetMinSeis, handleClick } = this.props;
    return (
      <div>
        <input type='button' name='presetMinUm' onClick={ handleClick } value={ presetMinUm }/>
        <input type='button' name='presetMinTres' onClick={ handleClick } value={ presetMinTres }/>
        <input type='button' name='presetMinSeis' onClick={ handleClick } value={ presetMinSeis }/>
      </div>
    );
  }
}

export default PresetMin;