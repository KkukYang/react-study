import React, {Component} from "react";

class UpdateContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc,
        }
    }

    inputFormHandler(e) {
        //this 가 undefined 로 나오기 때문에 해당함수 호출 시 this bind 까지 해준다.
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        console.log(this.props.data);
        console.log("UpdateContent render()");
        return (
            <article>
                <h2>Update</h2>
                {/* e.target 과 frm 은 같다. form 에 name 세팅해줘야 함. */}
                <form action="/update_process" method="post" name="frm"
                      onSubmit={function (e) {
                          e.preventDefault();
                          // debugger;
                          // alert("submit");
                          this.props.onSubmit(
                              e.target.title.value,
                              e.target.desc.value
                          );
                      }.bind(this)}
                >
                    <p><input
                        type="text"
                        name="title"
                        placeholder="title"
                        /*value={this.props.data.title}*/
                        value={this.state.title}
                        onChange={this.inputFormHandler.bind(this)}
                    /></p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="description"
                            /*value={this.props.data.desc}*/
                            value={this.state.desc}
                            onChange={function (e) {
                                this.setState({
                                    desc: e.target.value,
                                });
                            }.bind(this)}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit" value="submit"/>
                    </p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;