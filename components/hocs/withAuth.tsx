import { inputId } from "@/store/userId";
import { useRouter } from "next/router";
import { Component, ComponentType, useEffect } from "react";
import { useRecoilValue } from "recoil";

export const withAuth = (Component:ComponentType) => <P extends {}>(props:P) => {
    const router = useRouter();
    const currentId = useRecoilValue(inputId);
    useEffect(() => {
        if(currentId == '') {
            alert("로그아웃되었습니다.");
            router.push('/auth/login');
        }
    },[])

    return <Component {...props} />;
}