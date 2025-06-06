import React, { useEffect, useState } from "react";

export default function StateManage() {
    const [data, setData] = useState("Mydata");
    const [num, setNum] = useState(0);
 

    const updatingData = () => {
        setData("New Data");
    }

    //dependency updater
    useEffect(() => {
        if (data === "Hello World") {
            setNum(10000000);
        }
    }, [data]);//[dependencies] - when data changes, this function will run
    //useEffect is used to run side effects in functional components


    //usweEffect to set initial values
    useEffect(() => {
        setNum(-90)
        setData("Initial Value");
    },
    []);
    //[] - this function will run only once when the component is mounted

    const handleName=(e)=>{
        setData(e.target.value);
    }
    return (
        <div className="flex flex-col items-center space-y-4">
            {data}
            <button  onClick={updatingData}>Update Data</button>
            <button onClick={() => setData("From Callback")}>Click Callback</button>

            <div className="flex flex-row space-x-4">
                {num}
                <button onClick={() => setNum(num + 1)}>+</button>
                <button onClick={() => setNum(num - 1)}>-</button>
            </div>

            <div className="flex flex-col items-center">
                <input onChange={
                    (e) => {
                        setData(e.target.value);
                    }
                }></input>
                <input onChange={
                   handleName 
                }></input>
            </div>
        </div>
    )
}