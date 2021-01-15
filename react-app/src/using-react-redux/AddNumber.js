import React, {Component} from 'react';
// import store from "./store";

//container component(AddComponent의 부모) 때문에, redux 의 기능 종속에 벗어남.
//-> 다른곳에서도 이 코드를 또 쓸 수 있다는 것임.
class AddNumber extends Component {
    state = {size: 1}

    render() {
        return (
            <div>
                <h1>AddNumber</h1>

                <input type="button" value="+" onClick={function () {
                    // this.props.onClick(this.state.size);

                    // store.dispatch({
                    //     type: "INCREMENT",
                    //     size: this.state.size
                    // });

                    this.props.onClick(this.state.size);//다시 돌아옴. redux에 종속되지 않기 위해.
                }.bind(this)}/>

                <input type="text" value={this.state.size} onChange={function (e) {
                    this.setState({
                        size: Number(e.target.value)
                    });
                }.bind(this)}/>
            </div>
        );
    }
}

export default AddNumber;
