import { useEffect, useState } from "react";
import { User } from "@/interfaces/interface";
import { resUserInfo } from "@/axiosAPI/axiosFunction";
import { withAuth } from "@/components/hocs/withAuth";
import { useRecoilValue } from "recoil";
import { inputId } from "@/store/userId";
// 세션에서 아이디 정보를 불러오든가 아니면 redux에 아이디 저장.
const userInfo = () => {
    const [user, setUser] = useState<User>();
    const currentId = useRecoilValue(inputId);
    useEffect(() => {
        const getData = async () => {
            const res = await resUserInfo(currentId);//파라미터 수정 필!
            setUser(res);
        }
        getData();
    }, []);
    
    return (
        <div>
            아이디: {user?.id}<br></br>
            이메일: {user?.email}<br></br>
            핸드폰: {user?.phoneNum}<br></br>
            이름: {user?.name}<br></br>
        </div>
    );
}

export default withAuth(userInfo);