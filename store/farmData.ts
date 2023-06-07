import { SensorData } from "@/interfaces/interface";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = typeof window!=='undefined'?window.sessionStorage : undefined;
const {persistAtom} = recoilPersist({
    key:"farm-data",
    storage:sessionStorage,
});

export const farmData = atom<SensorData[]>({
    key: 'farmData',
    default: [],
    effects_UNSTABLE: [persistAtom],

})