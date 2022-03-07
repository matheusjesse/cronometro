import React from "react";

class Start extends React.Component {
  render() {
    const { handleCronometro, buttonDisabled } =this.props;
    return (
      <input type='button' disabled={buttonDisabled} onClick={handleCronometro} value="Start" />
    );
  }
}

export default Start;