import React, {Component} from 'react';
// import DisplayNumber from "./DisplayNumber";
import DisplayNumber from "./containers/DisplayNumber"; //DisplayNumber를 wrapping 하려고.

class DisplayNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>DisplayNumberRoot</h1>
                {/*<DisplayNumber number={this.props.number}></DisplayNumber>*/}
                <DisplayNumber unit="kg"></DisplayNumber>
            </div>
        );
    }
}

export default DisplayNumberRoot;
