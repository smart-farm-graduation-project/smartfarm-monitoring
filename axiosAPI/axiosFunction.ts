import axios from "axios";
import url from "./url";
import { loginType, SensorData, User } from "@/interfaces/interface";

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

const checkDuplicate = async (checkId:string) => {
    const id = checkId
    try{
        const response = await axios.get(url + "user/check-dup?id="+id,{
            withCredentials:true
        });
        const res:boolean = response.data;
        console.log('check id duplicate-', res)
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

const resUserInfo = async (id:string) => {
    console.log('resUserInfo', id);
    try {
        const response = await axios.get(url+"user/get-info",{
            params: {
                id:id,
            }
            ,withCredentials:true
        });
        const res:User = response.data;
        return res;
    } catch(e) {
        console.log(e);
        const fail:User = {
            id: "정보를 불러오는데 실패했습니다. 다시 시도해주세요.",
            pw: 'null',
            name: 'null',
            email: 'null',
            phoneNum: 'null',
        }
        return ;
    }
}

const getSensorData = async (id:string) => {
    try {
        const response = await axios.get(url + 'farm/search-data', {
            params: {
                id:id,
            },
            withCredentials:true,
        });
        const res:SensorData[] = response.data;
        console.log(res);
        return res;
    } catch(e) {
        console.log(e);
        const fail:SensorData[] = [{
            id: 0,
            sensorData: 'null',
            sensorDate: 'null',
            sensorName: 'null',
            farmNum: "정보를 불러오는데 실패했습니다. 다시 시도해주세요.",
            sensorUser:'null',
        }]
        return fail;
    }
}

const modifyNewPw = async(id:string, pw:string) => {
    try{
        const response = await axios
            .post(url+'user/auth/set-password', 
            {
                id:id,
                pw:pw,
            },{withCredentials:true});
        const res:string = response.data;
        return res;
    } catch(e) {
        console.log(e);
        return '변경에 실패하였습니다. 다시시도해주세요';
    }
  };
export { loginCheck,registerSend, checkDuplicate, resUserInfo, getSensorData, modifyNewPw }