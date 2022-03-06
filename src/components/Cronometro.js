import React from "react";

class Cronometro extends React.Component {
  render() {
    const {
      cronometroMin,
      cronometroSec,
    } = this.props
    return (
      <>
        <div name="cronometroMin">{ cronometroMin }</div>
        <div name="cronometroSec">{ cronometroSec }</div>
      </>
    );
  }
}

export default Cronometro;