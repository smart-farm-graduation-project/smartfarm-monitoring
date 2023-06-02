import React, { useState } from "react";
import axios from "axios";

const Find_id = () => {
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const send = () => {
    axios
      .post("url", {
        Name: name,
        phoneNum: phoneNum,
      })
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="휴대폰 번호(숫자만 입력)"
        onChange={(e) => setPhoneNum(e.target.value)}
      ></input>
      <br></br>
      <button
        onClick={() => {
          console.log(name);
          console.log(phoneNum);
          send();
        }}
      >
        아이디 찾기
      </button>
    </div>
  );
};

export default Find_id;