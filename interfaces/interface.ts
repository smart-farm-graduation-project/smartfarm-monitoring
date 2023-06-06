export interface loginType {
    id : string;
    pw : string;
};

export interface User {
    id:string;
    pw:string;
    phoneNum: string;
    email: string | "";
    name: string;
};

export interface SensorData {
    id:number;
    temperature:string,
    moisture:string,
    co2:string,
    groundMoisture:string,
    sensorDate:string,
    farmNum:string,
    sensorUser:string,
    fruitNum:string
}

export interface controlMsg {
    type:string,
    roomId:string,
    sender:string,
    message:string,
}

export interface farm {
    startDate: string,
    user: string,
    farmNum: string,
}