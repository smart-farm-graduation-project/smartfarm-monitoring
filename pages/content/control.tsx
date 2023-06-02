import { useEffect } from "react"

const control = () => {
    // useEffect websocket protocol
    useEffect(() => {
        
    }, [])
    const watering = () => {
        // 급수 컨트롤
    }

    const vent = () => {
        // 환풍 컨트롤
    }

    const light = () => {
        // 광량 컨트롤
    }

    return (
        <div>
            <button type="button" onClick={watering}>급수</button>
            <button type="button" onClick={vent}>환풍</button>
            <button type="button" onClick={light}>조도</button>
            {/* 현황판 = 급수중인지, 환풍중인지, 불이 켜져 있는지 */}
        </div>
    );
}

export default control;