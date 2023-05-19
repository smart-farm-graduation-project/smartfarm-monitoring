import React, { useState } from "react";
import { registerSend } from "@/axiosAPI/axiosFunction";
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

    return (
        <div>
            id <input onChange={onChange} name="id" value={id.toString()} />
            pw <input onChange={onChange} name="pw" value={pw.toString()} />
            {/* pw check <input onChange={onChange} name="id" value={id.toString()} /> */}
            name <input onChange={onChange} name="name" value={name.toString()} />
            phone <input onChange={onChange} name="phoneNum" value={phoneNum.toString()} />
            email <input onChange={onChange} name="email" value={email.toString()} />
            <input type="submit" onClick={regist} value="submit" />
        </div>
    )
}

export default register;