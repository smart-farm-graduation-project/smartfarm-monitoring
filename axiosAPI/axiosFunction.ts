import axios from "axios";
import connectUrl from "./url";
import { controlMsg, loginType, SensorData, User } from "@/interfaces/interface";
import { useRecoilValue } from "recoil";
import { inputId } from "@/store/userId";
// import url from "node:url";

const loginCheck = async (props: loginType) => {
    console.log(props);
    const id = props.id;
    const pw = props.pw;
    try{
        const response = await axios.post(connectUrl+"/user/auth/login",
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
        const response = await axios.get(connectUrl + "/user/check-dup?id="+id,{
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
        const response = await axios.post(connectUrl+"/user/register",
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
        const response = await axios.get(connectUrl+"/user/get-info",{
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
        const response = await axios.get(connectUrl + '/farm/search-data', {
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
            co2: 'null',
            sensorDate: 'null',
            fruitNum: 'null',
            farmNum: "",
            sensorUser:'정보를 불러오는데 실패했습니다. 다시 시도해주세요.',
            groundMoisture: 'null',
            moisture: 'null',
            temperature: 'null',
        }]
        return fail;
    }
}

const modifyNewPw = async(id:string, pw:string) => {
    try{
        const response = await axios
            .post(connectUrl+'/user/auth/set-password', 
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

const controlFarm = async (deviceType:string, roomId:string, state:string) => {
    const msg:controlMsg = {
        type: deviceType,
        roomId: roomId,
        sender: roomId,
        message: state,
    }
    // const param = new url.URLSearchParams({
    //     roomId: roomId,
    //     sender: roomId,
    //     message: state,
    // });
    try {
        console.log(msg)
        console.log(deviceType)
        // `/farm/control/${deviceType}`
        // const response = await axios.post(connectUrl + `/farm/control/${deviceType}`, {
        //     farmNum: "00000000",
        //     state: "false"
        // }, {withCredentials:true});
        // const res:boolean = response.data
        // return res;

        const response = await axios.get(connectUrl + "/send-message", {
            params: {
                type: msg.type,
                roomId: msg.roomId,
                sender: msg.sender,
                message: msg.message,
            },
            // params:param,
            withCredentials:true
        });

    } catch(e) {
        // console.log(e);
        return false;
    }
}

const farmRegist = async (farmNum:string, userId:string) => {
    await axios.post(connectUrl + '/farm/register-farm', {
        id: userId,
        farmNum: farmNum
    }, {withCredentials:true})
    
}

const getFarmList = async (userId:string) => {
    const res = await axios.get(connectUrl + '/farm/get-farm-list', {
        params: {
            id: userId
        }, 
        withCredentials:true
    });
    const farmList = res.data;
    return farmList;
}
export { loginCheck,registerSend, checkDuplicate, resUserInfo, getSensorData, modifyNewPw, controlFarm, farmRegist, getFarmList }