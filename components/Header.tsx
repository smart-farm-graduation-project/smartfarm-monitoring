import { inputId } from "@/store/userId";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
const Header = () => {
    const route = useRouter();
    const currentId = useRecoilValue(inputId);
    const [id, setId] = useRecoilState<string>(inputId);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (currentId == '') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [currentId]);

    const sign = () => {
        if (isLogin) {
            alert("로그아웃되었습니다.");
            setId('');
        }
        route.push('/auth/login');
    }
    return(
        <div className="flex flex-row flex-grow bg-slate-100 h-16 w-full text-justify justify-center">
            <div className="flex flex-nowrap mx-5 my-3 w-full">
                <div className="flex-none align-text-top">
                    <button onClick={e => route.push('/content/dashboard')}>
                        SmartFarm
                    </button>
                </div>
                <div className="flex-1 basis-1/4 justify-center">
                    <button type="button" className="hover:bg-slate-300 w-28 h-10 rounded-md" onClick={e => route.push("/content/dashboard")}>
                        dashboard
                    </button>
                </div>
                <div className="flex-1 basis-1/4">
                    <button type="button" className="hover:bg-slate-300 w-28 h-10 rounded-md" onClick={e => route.push("/user/userInfo")}>
                        user info
                    </button>
                </div>
                <div className="flex-1 basis-1/4"> 
                    <button type="button" className="hover:bg-slate-300 w-28 h-10 rounded-md" onClick={e => route.push("/content/control")}>
                        control
                    </button>
                </div>
                <div className="flex-1 basis-1/4 flex justify-end">
                    <button type="button" className="bg-slate-200 rounded-md w-20 h-10" onClick={sign}>{
                        isLogin ? "sign out" : "sign in"
                    }</button>
                </div>
            </div>
        </div>
    )
}

export default Header;