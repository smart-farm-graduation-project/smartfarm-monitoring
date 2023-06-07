import React, { useState } from "react";
import { registerSend, checkDuplicate } from "@/axiosAPI/axiosFunction";
import { User } from "@/interfaces/interface";
import { useRouter } from "next/router";

const register = () => {
    const [user, setUser] = useState<User>({
        id:'',
        pw:'',
        name:'',
        email:'',
        phoneNum:'',
    });
    const [isId, setIsId] = useState<String>("first");
    const router = useRouter();
    const {id, pw, name, email, phoneNum} = user;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const regist = async () => {
        console.log(user);
        const res:boolean = await registerSend(user);
        if (res) {
            router.push('/')
        } else {
            alert("다시 입력해주세요")
            console.log("false")
        }
    }

    const checkId = async () => {
        console.log(id);
        const res:boolean = await checkDuplicate(id)
        if(res) {
            setIsId("false");
        } else {
            setIsId("true");
        }
    }

    return (
        <div className="w-full h-full">
            <div className="w-96 h-52 text-right mx-auto my-52">
                <div className="grid justify-center grid-cols-3">
                    <div>
                        id 
                    </div>
                    <div>
                    <input className="border border-1 border-slate-300 ml-2 rounded-md" onChange={onChange} name="id" value={id.toString()} />
                    </div>
                    <div>
                    <button className="bg-slate-300 rounded-md ml-3" type="button" onClick={checkId} value={id.toString()}>중복체크</button>
                    </div>
                </div>
                {
                    isId==="first" ? 
                    <div className="mb-5"></div>
                    : (
                        isId === "true" ?
                        <div className="flex justify-center mb-5 text-center">
                            <p className="text-green-400">사용 가능한 아이디입니다.</p>
                        </div> :
                        <div className="flex justify-center mb-5">
                            <p className="text-red-400">이미 존재하는 아이디입니다.</p>
                        </div>
                    )
                }
                <div className="grid justify-center grid-cols-3 mb-5">
                    <div>pw</div>
                     <div>
                        <input className="border border-1 border-slate-300 ml-2 rounded-md" type="password" onChange={onChange} name="pw" value={pw.toString()} />
                     </div>
                </div>
                    <div className="grid justify-center grid-cols-3 mb-5">
                        <div>
                            name
                        </div>
                        <div>
                            <input className="border border-1 border-slate-300 ml-2 rounded-md" onChange={onChange} name="name" value={name.toString()} />
                        </div>
                         
                    </div>
                    <div className="grid justify-center grid-cols-3 mb-5">
                        <div>
                            phone 
                        </div>
                        <div>
                            <input className="border border-1 border-slate-300 ml-2 rounded-md" onChange={onChange} name="phoneNum" value={phoneNum.toString()} />
                        </div>
                    </div>
                    
                    <div className="grid justify-center grid-cols-3 mb-5">
                        <div>
                        email
                        </div>
                         <div>
                         <input className="border border-1 border-slate-300 ml-2 rounded-md" onChange={onChange} name="email" value={email.toString()} />
                         </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="block"></div>
                        <div>
                            <button type="button" onClick={regist} className="border bg-slate-300 rounded-md w-full h-10">가입</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default register;