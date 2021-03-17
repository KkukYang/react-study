import React, { Component } from "react";
// import WebWorker from "./WebWorker";
// import myWorker from "./myWorker";

class DisplayNumber extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    /* if (window.Worker) {
      var worker = new WebWorker(myWorker, JSON.stringify(this.props));
      var n = 0;
      console.log("normal");
      console.time("normal");
      //10억.
      //   for (let i = 0; i < 1000000000; i++) {
      //     n++;
      //   }
      console.log(n);
      console.timeEnd("normal");
      worker.postMessage("asdf");

      worker.onmessage = (event) => {
        console.log(event.data);
        worker.terminate();
      };
    } */
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
