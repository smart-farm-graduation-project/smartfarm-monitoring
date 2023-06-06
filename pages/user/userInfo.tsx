import { useEffect, useState } from "react";
import { User } from "@/interfaces/interface";
import { resUserInfo } from "@/axiosAPI/axiosFunction";
import { withAuth } from "@/components/hocs/withAuth";
// 세션에서 아이디 정보를 불러오든가 아니면 redux에 아이디 저장.
const userInfo = () => {
    const [user, setUser] = useState<User>();
    useEffect(() => {
        const getData = async () => {
            const res = await resUserInfo('sunmoon231');//파라미터 수정 필!
            setUser(res);
        }
        getData();
    }, []);
    
    return (
        <div>
            {user?.id}<br></br>
            {user?.pw}<br />
            {user?.email}<br></br>
            {user?.phoneNum}<br></br>
            {user?.name}<br></br>
        </div>
    );
}

export default withAuth(userInfo);