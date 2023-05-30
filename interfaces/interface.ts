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
    sensorName:string,
    sensorData:string,
    sensorDate:string,
    farmNum:string,
    sensorUser:string,
}