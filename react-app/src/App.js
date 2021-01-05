import React, {Component} from 'react';
import TOC from "./component/TOC"
import ReadContent from "./component/ReadContent"
import Subject from "./component/Subject"
import Control from "./component/Control"
import './App.css';
import CreateContent from "./component/CreateContent";
import UpdateContent from "./component/UpdateContent";

//CRUD 예제 메인.
class App extends Component {

    constructor(props) {
        super(props);
        this.max_content_id = 3;

        this.state = {
            mode: "welcome",
            selected_content_id: 2,
            welcome: {title: "Welcome", desc: "Hello, React!!!"},
            subject: {
                title: "WEB by title",
                sub: "world wide web!!! by sub",
            },
            contents: [
                {id: 1, title: "HTML", desc: "HTML is for information"},
                {id: 2, title: "CSS", desc: "CSS is for design"},
                {id: 3, title: "JavaScript", desc: "JavaScript is for interactive"},
            ],
        };
    }

    getReadContent() {
        var i = 0;
        while (i < this.state.contents.length) {
            var data = this.state.contents[i];
            if (data.id === this.state.selected_content_id) {
                return data;
                break;
            }
            i++;
        }
    }

    getContent() {
        var _title, _desc, _article = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === "read") {
            var _content = this.getReadContent();
            _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
        } else if (this.state.mode === "create") {
            _article = <CreateContent
                onSubmit={function (_title, _desc) {
                    //add content to this.state.contents
                    this.max_content_id = this.max_content_id + 1;
                    // //위험한 코드. TOC -> shouldComponentUpdate() 에서 비교할때, 원본과 변경값의 차이를 봐야 함.
                    // // 그래서 원본은 아직 냅두고 원본을 복제한 값을 변경할 값에다 넣고, 렌더링.
                    // this.state.contents.push(
                    //     {id: this.max_content_id, title: _title, desc: _desc},
                    // );
                    // this.setState({
                    //     /*App의 this.state.contents 를 바꾸었다 하더라도 setState() 로 바꿔야 함.*/
                    //     contents: this.state.contents,
                    // });

                    // //원본은 바꾸지 않는다. immutable.
                    // var _contents = this.state.contents.concat(
                    //     {id: this.max_content_id, title: _title, desc: _desc},
                    // );

                    //이렇게 아예 깊은복사로 복제본을 만들어서 사용해도 됨(원본 안건듬.)
                    var _contents = Array.from(this.state.contents);
                    _contents.push(
                        {id: this.max_content_id, title: _title, desc: _desc},
                    );
                    this.setState({
                        /*App의 this.state.contents 를 바꾸었다 하더라도 setState() 로 바꿔야 함.*/
                        contents: _contents,
                    });
                    console.log(_title, _desc);
                }.bind(this)}></CreateContent>
        } else if (this.state.mode === "update") {
            var _content = this.getReadContent();
            _article = <UpdateContent
                data={_content}
                onSubmit={function (_id, _title, _desc) {
                    var _contents = Array.from(this.state.contents);
                    var i = 0;
                    while (i < _contents.length) {
                        if (_contents[i].id === _id) {
                            _contents[i] = {
                                id: _id,
                                title: _title,
                                desc: _desc,
                            };
                            break;
                        }
                        i++;
                    }
                    this.setState({
                        /*App의 this.state.contents 를 바꾸었다 하더라도 setState() 로 바꿔야 함.*/
                        contents: _contents,
                    });
                    console.log(_title, _desc);
                }.bind(this)}></UpdateContent>
        }

        return _article;
    }


    /**
     * props / state 값이 바뀌면 render() 가 호출된다.
     * -> 화면이 다시그려진다.
     *
     * original data (state) 를 바꾸지 말고 (push() 등등.. ), concat() 등등 원본유지하면서
     * 새로운 데이터를 뱉는 방식으로 작업 해라. -> 원본의 복제본을 수정해서 적용시켜라.
     *
     */
    render() {
        console.log("App.render()");

        // console.log("render", this);
        return (
            <div className="App">
                {/* <header>
                    <h1><a href="/"
                           onClick={function (e) {
                               // console.log(e);
                               // debugger;
                               e.preventDefault();
                               // alert("hi");
                               // this.state.mode = "welcome";
                               this.setState({  //setState()로 state를 바꿔줘야 한다.
                                   mode: "welcome",
                               });
                           }.bind(this)}
                    >{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>*/}
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        // alert("hihihi");
                        this.setState({ //setState()로 state를 바꿔줘야 한다.
                            mode: "welcome",
                        });
                    }.bind(this)}
                ></Subject>
                {/*<Subject
                    title="WEB by title"
                    sub="world wide web!!! by sub"/>*/}
                {/*<Subject title="React by title" sub="for UI by sub"/>*/}


                <TOC
                    onChangePage1={function (id) {
                        // alert("hi");
                        this.setState({
                            mode: "read",
                            selected_content_id: Number(id),
                        });
                    }.bind(this)}
                    data={this.state.contents}></TOC>

                {/* "use strict"; 모드가 기본적으로 있어 일반함수 안에서 this 는 undefined 가 됨.
                그래서 bind(this) 해주는것.*/}
                {/*이벤트가 실행되었을때 실행되어야 하는 함수를 Handler라 한다.*/}
                <Control onChangeMode={function (_mode) {  //핸들러 함수.
                    if (_mode === "delete") {
                        if (window.confirm("Really??")) {
                            var _contents = Array.from(this.state.contents);
                            var i = 0;
                            while (i < _contents.length) {
                                if (_contents[i].id === this.state.selected_content_id) {
                                    _contents.splice(i, 1);
                                    break;
                                }
                                i++;
                            }
                            this.setState({
                                mode: "welcome",
                                contents: _contents,
                            });
                            window.alert("Deleted!!");
                        }
                    } else {
                        this.setState({
                            mode: _mode,
                        });
                    }

                }.bind(this)}></Control>

                {this.getContent()}
                {/*<Content
                    title="HTML by title"
                    desc="HTML is HyperText Markup Language. by desc."/>*/}
            </div>
        );
    }
}

export default App;
