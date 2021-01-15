import React, {Component} from "react";
import "./App5.css";
import AddNumberRoot from "./AddNumberRoot";
import DisplayNumberRoot from "./DisplayNumberRoot";

class App5 extends Component {
    state = {number: 0}

    render() {
        return (
            <div className="App">
                <h1>Root</h1>
                {/*<AddNumberRoot onClick={function (size) {*/}
                {/*    this.setState({*/}
                {/*        number: this.state.number + size*/}
                {/*    });*/}
                {/*}.bind(this)}></AddNumberRoot>*/}

                {/*<DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>*/}

                <AddNumberRoot></AddNumberRoot>
                <DisplayNumberRoot></DisplayNumberRoot>
            </div>
        )
    }
}

export default App5;
