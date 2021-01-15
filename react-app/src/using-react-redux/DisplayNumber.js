import React, {Component} from 'react';
// import store from "./store";

//redux의 기능으로부터 해방시키는 작업을 해야 함.->다른곳에서 이 컴포넌트가 사용되어야 한다면. 작업 필요.
class DisplayNumber extends Component {
    // //redux 종속성 제거 작업.
    // state = {
    //     number: store.getState().number
    // }
    //
    // constructor(props) {
    //     super(props);
    //
    //     store.subscribe(function () {
    //         this.setState({
    //             number: store.getState().number
    //         });
    //     }.bind(this));
    // }

    render() {
        return (
            <div>
                <h1>DisplayNumber</h1>
                {/*<input type="text" value={this.state.number} readOnly/>*/}
                <input type="text" value={this.props.number} readOnly/>
                {this.props.unit}
            </div>
        );
    }
}

export default DisplayNumber;
