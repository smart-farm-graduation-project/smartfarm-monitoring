import React, { Component, useEffect, useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import { AppProps } from "next/app";
import { getSensorData } from "@/axiosAPI/axiosFunction";
import { SensorData } from "@/interfaces/interface";
const about = () => {
    const [sensorData, setSensorData] = useState<SensorData>();
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
        <div>
            dafda
        </div>
    );
}

export default about;