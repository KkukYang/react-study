import React, { Component } from "react";

class AddNumber extends Component {
  state = { size: 1 };
  constructor(props) {
    super(props);
    // this.worker = null;
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
