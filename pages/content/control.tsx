import { controlFarm } from "@/axiosAPI/axiosFunction";
import { socketConnect } from "@/axiosAPI/webSocket"
import { withAuth } from "@/components/hocs/withAuth";
import { controlMsg, farm } from "@/interfaces/interface";
import { farmList } from "@/store/farmList";
import { inputId } from "@/store/userId";
import { ChangeEvent, useEffect, useState } from "react"
import { useRecoilValue } from "recoil";

const control = () => {
    // useEffect websocket protocol
    const currentId:string = useRecoilValue(inputId);
    const farmNum:farm[] = useRecoilValue(farmList);
    const [selectFarm, setSelectFarm] = useState('');
    // const [water, setWater] = useState("0");
    const [wind, setWind] = useState("off");
    const [led, setLed] = useState("off");
    useEffect(() => {
        setSelectFarm(farmNum[0].farmNum);
    }, [])
    const watering = () => {
        console.log("water");
        const waterControl:controlMsg = {
            type:"water",
            roomId:"00000000",
            sender:currentId,
            message: "on",
        }
        controlFarm("water", selectFarm, "on");
        alert("급수하였습니다");
        // 급수 컨트롤
    }

    const ventOn = () => {
        // 환풍 컨트롤
        controlFarm("wind", selectFarm, "on");
        alert("창문을 열겠습니다");
    }

    const ventOff = () => {
        // 환풍 컨트롤
        controlFarm("wind", selectFarm, "off");
        alert("창문을 닫겠습니다");
    }

    const ledOn = () => {
        // 광량 컨트롤
        controlFarm("led", selectFarm, "on");
        alert("조명을 켰습니다");
    }

    const ledOff = () => {
        // 광량 컨트롤
        controlFarm("led", selectFarm, "off");
        alert("조명을 껐습니다");
    }
    let i = 0;
    return (
        <div>
            {
                selectFarm ? (
                    <div>
                    <select className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                    onChange={e => setSelectFarm(e.target.value)} value={selectFarm}>
                        {/* <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option> */}
                        {
                        farmNum.map(farm => {
                            return(
                                <option value={farm.farmNum} key={farm.farmNum}>{farm.farmNum}</option>
                            )})
                        }
                    </select>
                    </div>
                ) : (
                    <div>Loading.....</div>
                )
            }
            <div className="flex flex-row justify-around mx-10 mt-7">
                {/* 급수량 <input type="number" onChange={e => setWater(e.target.value)} />L */}
                <div className="flex flex-col">
                    <button type="button" className="bg-blue-400 rounded-sm w-16 h-9" onClick={watering}>급수</button><br />
                </div>
                <div className="flex flex-col">
                    <button type="button" onClick={ventOn} className="bg-green-300 rounded-sm w-16 h-9">환풍 On</button>
                    <button type="button" onClick={ventOff} className="bg-teal-500 rounded-sm w-16 h-9">환풍 Off</button>
                </div>
                <div className="flex flex-col">
                    <button type="button" onClick={ledOn} className="bg-yellow-200 rounded-sm w-16 h-9">조도 On</button>
                    <button type="button" onClick={ledOff} className="bg-black text-white rounded-sm w-16 h-9">조도 Off</button>
                </div>
                {/* 현황판 = 급수중인지, 환풍중인지, 불이 켜져 있는지 */}
            </div>
        </div>
    );
}

export default withAuth(control);