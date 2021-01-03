import React, {Component} from "react";

class TOC extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log("===>TOC render shouldComponentUpdate()"
        //     , nextProps.data, this.props.data
        // );

        if (nextProps.data === this.props.data) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        // console.log("===>TOC render()");

        //전달된 props. 내부 값을 변경할 수 없다.
        var lists = [];
        var data = this.props.data;
        var i = 0;

        while (i < data.length) {
            //반복되는 것들은 key를 주자.
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}
                       data-id={data[i].id}
                       data-zzz={data[i].id}
                       onClick={function (_1, _2, _3, _4, e) {
                           // debugger;
                           e.preventDefault();
                           this.props.onChangePage1(e.target.dataset.id);
                           console.log("data-zzz -> e.target.dataset.zzz", e.target.dataset.zzz);
                           console.log("_1:", _1);  //a
                           console.log("_2:", _2);  //b
                           console.log("_3:", _3);  //c
                           console.log("_4:", _4);  //data[i].id
                       }.bind(this, "a", "b", "c", data[i].id)}
                    >{data[i].title}</a>
                </li>
            );
            i = i + 1;
        }

        return (
            /*아래 내용은 jsx라는 파일안에 들어가야 함.*/
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;

