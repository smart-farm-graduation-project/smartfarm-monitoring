import React, { useEffect, useState } from "react";
import axios from "axios";
import { loginCheck, modifyNewPw } from "@/axiosAPI/axiosFunction";
import { useRecoilValue } from "recoil";
import { inputId } from "@/store/farmData";
import { loginType } from "@/interfaces/interface";

const FindPW = () => {
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    console.log('current confirm = ' + confirm);
  }, [confirm]);

  return (
    <div>
      {confirm ? (
        <ResetPW></ResetPW>
      ) : (
        <CurPwCheck setConfirm={setConfirm}></CurPwCheck>
      )}
    </div>
  );
};

const CurPwCheck = (props:any) => {
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState(true)
    const currentId = useRecoilValue(inputId)
    const checkPw = async () => {
        const loginInfo:loginType = {
            id: currentId,
            pw: pw
        };
        const res = await loginCheck(loginInfo);
        if (res) {
            props.setConfirm(true)
        } else {
            return (
                setPwCheck(false)
            );
        }
    }
    return (
        <div>
            {
                pwCheck ? (
                    <div></div>
                ) : (
                    <div className="text-red-500">비밀번호가 틀렸습니다.</div>
                )
            }
            <input
            type="password"
            placeholder="현재 비밀번호"
            onChange={(e) => setPw(e.target.value)}
            ></input>
            <br></br>
            <button
            onClick={() => {
                console.log(pw);
                checkPw();
            }}
            >
            아이디 확인
            </button>
        </div>
    );
};

const ResetPW = () => {
  const [newPw, setNewPw] = useState('');
  const currentId = useRecoilValue(inputId)
  const send = async () => {
    const res:string = await modifyNewPw(currentId, newPw)
  };

  return (
    <div>
      <input
        type="password"
        placeholder="새 비밀번호"
        onChange={(e) => setNewPw(e.target.value)}
      ></input>
      <br></br>
      <button
        onClick={() => {
          console.log('newPw = ' + newPw);
          send();
        }}
      >
        비밀번호 변경
      </button>
    </div>
  );
};

export default FindPW;