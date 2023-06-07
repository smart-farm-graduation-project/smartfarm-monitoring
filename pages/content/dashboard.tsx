import React, { Component, useEffect, useState } from "react";
import { getSensorData } from "@/axiosAPI/axiosFunction";
import { SensorData } from "@/interfaces/interface";
import { useRecoilState, useRecoilValue } from 'recoil';
import { inputId } from "@/store/userId";
import { withAuth } from "@/components/hocs/withAuth";
import Chart from "@/components/layout/chart";
import { farmData } from "@/store/farmData";
const about = () => {
    const [sensorData, setSensorData] = useState<SensorData[]>([]);
    const [farmDatas, setFarmDatas] = useRecoilState<SensorData[]>(farmData);
    const currentId = useRecoilValue(inputId)
    useEffect(() => {
        const getData = async () => {
            const res = await getSensorData(currentId);
            const viewData = res.slice(0,5);
            setSensorData(viewData);
            setFarmDatas(viewData);
        }
        console.log(currentId);
        getData();
    },[])
    // return (
    // <Sidebar>
    //     <Component {...pageProps} />
    // </Sidebar>
    // );
    return (
        <div className="grid grid-cols-2 gap-4 justify-center w-auto h-auto">
                <div className="flex felx-col m-10 shadow-sm rounded-md w-full">
                    <table className="table-fixed border-collapse w-full mx-10">
                        <thead>
                            <tr className="bg-red-200 text-left">
                                <th>팜 아이디</th>
                                <th>열매갯수</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sensorData.map(farm => {
                                    return (
                                        <tr>
                                            <td>{farm.farmNum}</td>
                                            <td>{farm.fruitNum}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="m-10">
                    
                    {/* <Chart chartName="fruit"></Chart> */}
                    
                </div>
        <table className="col-span-2 table-fixed border-collapse mx-20 shadow-sm rounded-md">
            <thead>
                <tr className=" bg-red-200 text-left">
                    <th>
                        수집 날짜
                    </th>
                    <th>
                        팜 아이디
                    </th>
                    <th>
                        온도
                    </th>
                    <th>
                        습도
                    </th>
                    <th>
                        이산화탄소
                    </th>
                    <th>
                        토양습도
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    sensorData.map(function (res){
                        return(
                            <tr>
                                <td>
                                {res.sensorDate}
                                </td>
                                <td>
                                {res.farmNum}
                                </td>
                                <td>
                                {res.temperature}
                                </td>
                                <td>
                                {res.moisture}
                                </td>
                                <td>
                                {res.co2}
                                </td>
                                <td>
                                {res.groundMoisture}
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        </div>
    );
}

export default withAuth(about);