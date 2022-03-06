import React from "react";

class PresetMin extends React.Component {
  render() {
    const { presetMinUm } = this.props;
    return(
      <input type='button' name='presetMinUm' value={`${ presetMinUm } MIN`}/>
    );
  }
}

export default PresetMin;