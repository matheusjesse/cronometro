import React from "react";

class Start extends React.Component {
  render() {
    const { handleCronometro } =this.props;
    return (
      <input type='button' onClick={handleCronometro} value="Start" />
    );
  }
}

export default Start;