import React, { useId } from "react"
import './InputBox.css'; 

export default function InputBox({
    label,
    amount,
    currencyOptions=[],
    selectCurrency,
    currencyChange,
    onAmountChange,
})
{
    const amtId = useId();//This Hook will generate random unique ids but it cannot be used in generating different value in keys.
    console.log(amtId);
    return(
        <div id="boxbackground">
            <div id="ibox">
                <label htmlFor={amtId} >
                    {label}
                </label>
                <input type="number" placeholder="Amount" id={amtId} value={amount} onChange={(e)=>  onAmountChange && onAmountChange(Number(e.target.value))}/> {/*This will check first that onAmountChange function available or not if not thn exit from arrow function and if yes thn pass parameter to the onAmountChange function.This will check first that onAmountChange function available or not if not thn exit from arrow funvtion and if yes thn pass arguments to the onAmountChange function. */}
            </div>
            <div id="cbox">
                <p id="ctext">Currency Type</p>
                <select value={selectCurrency} onChange={(e)=>currencyChange && currencyChange(e.target.value)}>
                    {currencyOptions.map((value)=>(
                        <option key={value} value={value}>
                        {value} 
                    </option>
                    ))} 

                </select>
            </div>
        </div>
    )
}