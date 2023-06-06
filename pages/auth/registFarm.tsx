import { farmRegist } from "@/axiosAPI/axiosFunction";
import { withAuth } from "@/components/hocs/withAuth";
import { inputId } from "@/store/userId";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const regiFarm = () => {

    const [farmNum, setFarmNum] = useState('');
    const currentId = useRecoilValue(inputId);
    const router = useRouter();

    const insertFarmNum = async () => {
        const res = await farmRegist(farmNum, currentId);
        alert("등록되었습니다.");
        router.push("/content/dashboard");
    }

    return(
        <div>
            <input type="text" onChange={e => setFarmNum(e.target.value)}></input>
            <button type="button" onClick={insertFarmNum}>등록</button>
        </div>
    );
}

export default withAuth(regiFarm);