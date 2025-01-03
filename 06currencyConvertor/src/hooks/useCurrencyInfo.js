// import {useEffect,useState} from "react"

// // https://open.er-api.com/v6/latest/USD
// // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json


// function useCurrencyInfo(currency){
//     const [data,setData] = useState({})
//     useEffect(()=>{
//         // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`)
//         .then((res)=>res.json())
//         .then((res)=>setData(res[currency]))
//         console.log(data);
//     },[currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;


import { useEffect, useState } from "react";


// creating a custom hook
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return; // Guard against empty currency
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res[currency]) {
          setData(res[currency]);
        } else {
          console.error("Currency data not found");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
