import React from "react";

class Cronometro extends React.Component {
  render() {
    const {
      cronometroMin,
    } = this.props
    return (
      <div name="cronometroMin">{ cronometroMin }</div>
  
    );
  }
}

export default Cronometro;