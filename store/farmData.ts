import { atom, RecoilEnv } from "recoil";
import { SensorData } from "@/interfaces/interface";
import { recoilPersist } from 'recoil-persist'

// const { persistAtom } = recoilPersist();
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
// export const inputState = atom<SensorData[]>({
//     key: 'inputState',
//     default: undefined
// })

// export const farmDataState = atom<SensorData[]>({
//     key: 'farmDatas',
//     default: [
//         {
//             farmNum: '00000001',
//              id: 1,
//              sensorData: '35235',
//              sensorDate: '3342345-3423-5324',
//              sensorName: 'drasdr',
//              sensorUser: 'asdsdaasdas'
//         }
//     ]
// })
const sessionStorage = typeof window!=='undefined'?window.sessionStorage : undefined;
const {persistAtom} = recoilPersist({
    key:"farm-list",
    storage:sessionStorage,
});

export const farmList = atom({
    key: 'farmList',
    default: [],
    effects_UNSTABLE: [persistAtom],

})