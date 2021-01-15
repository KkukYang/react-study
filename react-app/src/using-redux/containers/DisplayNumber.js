import DisplayNumber from "../DisplayNumber";
import React, {Component} from "react";
import store from "../store";

//하위 컴포넌트로 오게 될 DisplayNumber 를 redux 의 종속성에서 벗어나게 하기위해 하는 작업.
export default class extends Component {

    state = {
        number: store.getState().number
    }

    constructor(props) {
        super(props);

        store.subscribe(function () {
            this.setState({
                number: store.getState().number
            });
        }.bind(this));
    }

    render() {
        return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    }
}
