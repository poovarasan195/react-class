import React from "react";

function inputbox ({
    lable,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoption=[],
    selectedcuruncy="usd",
    amountdesable = false,
    currencydefault = false,
    classname ="",
}){
  
    return(
        <div className={` bg-white rounded-lg p-3 text-sm flex${classname}`}>
            <div className="w-1/2">
               <label className="text-black/40 inline-block mb-2">{lable}</label>
              <input 
            type="number"
            className="w-full bg-transparent py-1.5"
            placeholder="amount"
            disabled={amountdesable}
            value={amount}
            onChange={(e)=> onamountchange && onamountchange(Number(e.target.value))}
            />
            </div>
            <div className="w-1/2 flex justify-end text-end ">
               <p className="text-black/40 mb-2 w-full">currency type</p>
               <select
                className="outline-none bg-gray-100 px-1 py-1 cursor-pointer rounded-lg"
                value={selectedcuruncy}
                onChange={(e)=>{oncurrencychange && oncurrencychange(e.target.value)}}
                disabled={currencydefault}
               >
                {currencyoption.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
               </select>
            </div>
        </div>

    )
}

export default inputbox