import React from "react";

class Restart extends React.Component {
  render() {
    const { handleRestart } = this.props;
    return(
      <input type="button" name="restart" value="Reiniciar" onClick={ handleRestart }/>
    );
  }
}

export default Restart;