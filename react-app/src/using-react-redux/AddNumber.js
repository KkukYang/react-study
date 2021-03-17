import React, { Component } from "react";
import WebWorker from "./WebWorker";
import myWorker from "./myWorker";

class AddNumber extends Component {
  state = { size: 1 };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>AddNumber</h1>

        <input
          type="button"
          value="+"
          onClick={function () {
            this.props.onClick(this.state.size);
            if (window.Worker) {
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
            }
          }.bind(this)}
        />

        <input
          type="text"
          value={this.state.size}
          onChange={function (e) {
            this.setState({
              size: Number(e.target.value),
            });
          }.bind(this)}
        />
      </div>
    );
  }
}

export default AddNumber;
