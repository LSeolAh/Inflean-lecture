import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  // let [글제목1, a] = useState("남자 코트 추천");
  // let [글제목2, b] = useState("강남 맛집 추천");
  // let [글제목3, c] = useState("파이썬 독학");
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 맛집 추천",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  // let [modal, setModal] = useState([false, ""]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>설라 블로그</h4>
      </div>
      {글제목.map(function (v, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal([true, v]);
                setTitle(i);
              }}
            >
              {v}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i]++;
                  글제목변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>8월 6일 발행</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          // console.log(입력값);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.splice(0, 0, 입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>

      {modal[0] === true ? (
        // <Modal color={"yellow"} title= {title}글제목변경={글제목변경} 글제목={modal[1]} />
        <Modal
          color={"yellow"}
          title={title}
          글제목변경={글제목변경}
          글제목={글제목}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      {/* <h4>{props.글제목}</h4> */}
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자코트추천";
          props.글제목변경(copy);
        }}
      >
        변경
      </button>
    </div>
  );
}

// let Hi = () => {
//   return (
//     <div>
//       <p>졸리다</p>
//     </div>
//   );
// };

export default App;
