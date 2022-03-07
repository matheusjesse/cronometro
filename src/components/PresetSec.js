import React from "react";

class PresetSec extends React.Component {
  render() {
    const { presetSec, handleClickSec, buttonDisabled } = this.props;
    return(
      <input type="button" name={presetSec} disabled={buttonDisabled} onClick={handleClickSec} value={`${presetSec} Sec`}/>
    );
  }
}

export default PresetSec;