
import './App.css';
import useCurrencyInfo from './Custom Hook/UseCurrencyInfo';
import InputBox from './Components/InputBox'
import { useState } from 'react';


function App() {
    const [amt,setAmt] = useState(0);
    const [cnvrtAmt,setCnvrtAmt] = useState(0);

    const [from,setFrom] = useState('usd')
    const [to,setTo] = useState('inr')

    const currency = useCurrencyInfo(from);
    const options = Object.keys(currency)

    function swapBtn(){
        setFrom(to)
        setTo(from)
        setCnvrtAmt(amt)
        setAmt(cnvrtAmt)
    }

    function convertBtn(){
        setCnvrtAmt(amt*currency[to])
    }

  return (
      <div id='background'>
          <div id='body'>
              <div id='main'>
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convertBtn()
                      }}> 
                      <div id='box1'>
                          <InputBox amount={amt} 
                          currencyOptions={options} 
                          label="From" 
                          onAmountChange={(value)=>setAmt(value)} 
                          selectCurrency={from} 
                          currencyChange={(currency)=>setFrom(currency)}/>
                      </div>
                      <div id='boxofSwap'>
                          <button type="button" id='swapBtn' onClick={swapBtn}>
                              swap
                          </button>
                      </div>
                      <div id='box2'>
                          <InputBox label="To" 
                          amount={cnvrtAmt} 
                          onAmountChange={(value)=>setCnvrtAmt(value)}
                          currencyOptions={options}  
                          selectCurrency={to} 
                          currencyChange={(currency)=>setTo(currency)}/>
                      </div>
                      <button type="submit" id='convertbtn'>
                          CONVERT {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App;
