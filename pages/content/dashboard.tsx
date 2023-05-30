import React, { Component, useEffect, useState } from "react";
import { getSensorData } from "@/axiosAPI/axiosFunction";
import { SensorData } from "@/interfaces/interface";
const about = () => {
    const [sensorData, setSensorData] = useState<SensorData[]>([]);
    useEffect(() => {
        const getData = async () => {
            const res = await getSensorData("xptmxmfhqhso");
            setSensorData(res);
        }
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
                <tr>
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