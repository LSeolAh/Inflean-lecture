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
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>설라 블로그</h4>
      </div>
      {글제목.map(function (v, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => setModal(true)}>
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i]++;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>8월 6일 발행</p>
          </div>
        );
      })}
      {modal === true ? (
        <Modal color={"yellow"} 글제목변경={글제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[0]}</h4>
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

let Hi = () => {
  return (
    <div>
      <p>졸리다</p>
    </div>
  );
};

export default App;
