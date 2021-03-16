import React, { Component } from "react";
import WebWorker from "./WebWorker";
import myWorker from "./myWorker";

class DisplayNumber extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    if (window.Worker) {
      var worker = new WebWorker(myWorker);
      worker.onmessage = (event) => {
        console.log(event.data);
      };
    }
  }

  render() {
    return (
      <div>
        <h1>DisplayNumber</h1>
        <input id="DisplayNum" type="text" value={this.props.number} readOnly />
        {this.props.unit}
      </div>
    );
  }
}

export default DisplayNumber;
