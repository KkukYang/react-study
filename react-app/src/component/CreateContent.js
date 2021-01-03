import React, {Component} from "react";

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                {/* e.target 과 frm 은 같다. form 에 name 세팅해줘야 함.
                  그런데 컴파일러가 frm 네임 오브젝트 인식을 못함.*/}
                <form action="/create_process" method="post" name="frm"
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
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="submit"/>
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;