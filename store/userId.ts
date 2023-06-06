import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = typeof window!=='undefined'?window.sessionStorage : undefined;
const {persistAtom} = recoilPersist({
    key:"id",
    storage:sessionStorage,
});

export const inputId = atom({
    key: 'inputId',
    default: '',
    effects_UNSTABLE: [persistAtom],

})