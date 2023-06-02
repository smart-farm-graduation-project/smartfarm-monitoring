import React, { Component, useEffect, useState } from "react";
import { getSensorData } from "@/axiosAPI/axiosFunction";
import { SensorData } from "@/interfaces/interface";
import { useRecoilValue } from 'recoil';
import { inputId } from "@/store/farmData";
const about = () => {
    const [sensorData, setSensorData] = useState<SensorData[]>([]);
    const currentId = useRecoilValue(inputId)
    useEffect(() => {
        const getData = async () => {
            const res = await getSensorData("xptmxmfhqhso");
            setSensorData(res);
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
        <table className="table-fixed">
            <thead>
                <tr className=" bg-red-200">
                    <th>
                        sensor
                    </th>
                    <th>
                        farm name
                    </th>
                    <th>
                        data
                    </th>
                    <th>
                        regist date
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    sensorData.map(function (res){
                        return(
                            <tr>
                                <td>
                                {res.sensorName}
                                </td>
                                <td>
                                {res.farmNum}
                                </td>
                                <td>
                                {res.sensorData}
                                </td>
                                <td>
                                {res.sensorDate}
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default about;