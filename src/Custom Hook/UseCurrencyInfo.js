import { useState,useEffect } from "react"

export default function useCurrencyInfo(currency){
    const [data, setData] = useState({}) // Put empty object as default coz. if no object fetch from api, so thn it didn't crash.
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp)=>resp.json())
        .then((resp)=>setData(resp[currency]))
       // console.log(data);
    },[currency])
    return data
}