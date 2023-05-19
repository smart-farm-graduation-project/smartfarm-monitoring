import axios from "axios";
import url from "./url";
import { loginType, User } from "@/interfaces/interface";

const loginCheck = async (props: loginType) => {
    console.log(props);
    const id = props.id;
    const pw = props.pw;
    try{
        const response = await axios.post(url+"user/auth/login",
            {
                id: id,
                pw: pw
            }, {withCredentials:true}
        );
        const res:boolean = response.data;
        console.log(res);
        return res;
    } catch(e) {
        console.log(e);
        const res:boolean = false;
        return res;
    }
}

const registerSend = async (props: User) => {
    console.log('register', props);
    try {
        const response = await axios.post(url+"user/register",
        {
            name: props.name,
            id: props.id,
            pw: props.pw,
            phoneNum: props.phoneNum,
            email: props.email,
        }, {withCredentials:true});
        const res:boolean = response.data;
        console.log("register-", res)
        return res;
    } catch(e) {
        console.log(e);
        const res:boolean = false;
        return res;
    }
}
export { loginCheck,registerSend }