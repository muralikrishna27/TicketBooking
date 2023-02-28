import React from "react";

class Calculator extends React.Component {
  state = {
    a: 0,
    b: 0,
    showResult: false,
  };

  setA = (e) => {
    this.setState({
      a: parseInt(e.target.value),
      showResult: false,
    });
  };

  setB = (e) => {
    this.setState({
      b: parseInt(e.target.value),
      showResult: false,
    });
  };

  setShowResult = (e) => {
    this.setState(prevState => {
      return {showResult: !prevState.showResult};
    });
  };
  
  render() {
    const add = this.state.a + this.state.b;
    return (
      <div>
        <div>
          <input onChange={this.setA} />
          <input onChange={this.setB} />
          <button onClick={this.setShowResult}>Submit</button>
        </div>

        {this.state.showResult ? (
          <div>
            {"A : " + this.state.a + " B :" + this.state.b}
            <br />
            {"Add : " + add}
            <br />
            {"Sub : " + (this.state.a - this.state.b)}
            <br />
            {"Mul : " + this.state.a * this.state.b}
            <br />
            {"Dev : " + this.state.a / this.state.b}
          </div>
        ) : (
          <div>Click on Show Result</div>
        )}
      </div>
    );
  }
}

export default Calculator;
