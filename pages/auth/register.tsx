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
        <div>
            id <input onChange={onChange} name="id" value={id.toString()} />
            <button type="button" onClick={checkId} value={id.toString()}>중복체크</button>
            {
                isId==="first" ? 
                <div></div>
                : (
                    isId === "true" ?
                    <div>
                        <p className="text-green-400">사용 가능한 아이디입니다.</p>
                    </div> :
                    <div>
                        <p className="text-red-400">이미 존재하는 아이디입니다.</p>
                    </div>
                )
            }
            pw <input onChange={onChange} name="pw" value={pw.toString()} />
            name <input onChange={onChange} name="name" value={name.toString()} />
            phone <input onChange={onChange} name="phoneNum" value={phoneNum.toString()} />
            email <input onChange={onChange} name="email" value={email.toString()} />
            <input type="submit" onClick={regist} value="submit" />
        </div>
    )
}

export default register;