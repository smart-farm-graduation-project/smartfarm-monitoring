import React from "react"
import { useState } from "react";
import { loginCheck } from "@/axiosAPI/axiosFunction";
import { useRouter } from "next/router";

const login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const router = useRouter();

    const check = async () => {
        const loginInfo = {
            id: id,
            pw: pw
        }
        const res = await loginCheck(loginInfo);
        if(res) {
            router.push("/content/dashboard");
        }
        else {
            console.log("login fail");
        }
    }

    const goRegist = () => {
        router.push('/auth/register')
    }

    return (
        <div>
            SmartFarm Login
            <div>
                id <input type="text" onChange={e => setId(e.target.value)} value={id}/>
                pw <input type="password" onChange={e => setPw(e.target.value)} value={pw}/> 
                <input type="submit" onClick={check} />
                <button onClick={goRegist} >register </button>
            </div>
        </div>
    );
}

export default login;