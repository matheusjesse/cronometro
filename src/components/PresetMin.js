import React from "react";

class PresetMin extends React.Component {
  render() {
    const { buttonDisabled, presetMinUm, presetMinTres, presetMinSeis, handleClick } = this.props;
    return (
      <div>
        <input type='button' disabled={buttonDisabled} name='presetMinUm' onClick={ handleClick } value={ presetMinUm }/>
        <input type='button' disabled={buttonDisabled} name='presetMinTres' onClick={ handleClick } value={ presetMinTres }/>
        <input type='button' disabled={buttonDisabled} name='presetMinSeis' onClick={ handleClick } value={ presetMinSeis }/>
      </div>
    );
  }
}

export default PresetMin;