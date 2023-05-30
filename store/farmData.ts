import { atom } from "recoil";
import { SensorData } from "@/interfaces/interface";

export const inputState = atom<SensorData>({
    key: 'inputState',
    default: undefined
})

export const farmDataState = atom<SensorData[]>({
    key: 'farmDatas',
    default: [
        {
            farmNum: '00000001',
             id: 1,
             sensorData: '35235',
             sensorDate: '3342345-3423-5324',
             sensorName: 'drasdr',
             sensorUser: 'asdsdaasdas'
        }
    ]
})