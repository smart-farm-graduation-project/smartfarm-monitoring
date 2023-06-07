import React from "react"
import { useState } from "react";
import { getFarmList, loginCheck } from "@/axiosAPI/axiosFunction";
import { useRouter } from "next/router";
import {useRecoilState} from "recoil"
import { inputId } from "@/store/userId";
import { farmList } from "@/store/farmList";
import { farm } from "@/interfaces/interface";
const Login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const router = useRouter();
    const [currentId, setCurrentId] = useRecoilState<string>(inputId);
    const [farmNum, setFarmNum] = useRecoilState<farm[]>(farmList);
    const check = async () => {
        const loginInfo = {
            id: id,
            pw: pw
        }
        const res = await loginCheck(loginInfo);
        if(res) {
          setCurrentId(id);
          const getFarmNum = await getFarmList(id);
          if (getFarmNum.length == 0) {
            router.push("/auth/registFarm");
            return;
          }
          setFarmNum(getFarmNum);
          router.push("/content/dashboard");
        }
        else {
          alert("아이디 혹은 비밀번호가 다릅니다")
            console.log("login fail");
        }
    }

    const goRegist = () => {
        router.push('/auth/register')
    }

    return (
        // <div>
        //     SmartFarm Login
        //     <div>
        //         id <input type="text" onChange={e => setId(e.target.value)} value={id}/>
        //         pw <input classNameName="border-spacing-1 border border-slate-950 rounded-md mb-2" type="password" onChange={e => setPw(e.target.value)} value={pw}/> 
        //         <input type="submit" onClick={check} />
        //         <button onClick={goRegist} >register </button>
        //     </div>
        // </div>
        <div className="h-full flex justify-center mt-52">
            <div className="block row-start-2 row-span2"></div>
        <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Id
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={id} onChange={e => setId(e.target.value)} id="id" type="text" placeholder="id" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setPw(e.target.value)} value={pw} onKeyDown={e => {if (e.key == 'Enter') {check()}}} id="pw" type="password" placeholder="******************" />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={check}>
              Login
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/auth/register">
              regist
            </a>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/auth/setPw">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      </div>
    );
}

export default Login;