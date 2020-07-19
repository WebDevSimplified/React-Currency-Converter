import React, { useState, useEffect } from 'react';
import './App.css';
import  CurrencyInfo  from './currency';

const API_URL =  ('https://api.exchangerate-api.com/v4/latest/USD');


function App ()  {
  /*states*/ 
  const [currencies, setCurrencies] = useState([])
  const [baseCurrency, setBaseCurrency] = useState()
  const [newCurrency, setNewCurrency] = useState()
  const [baseAmount, setBaseAmount] = useState(100)
  const [newAmount, setnewAmount] = useState(true)
  const [exchangeRate, setExchangeRate] = useState([])

  /*new Amounts */ 
   let toAmount, fromAmount;
    if ( newAmount) {
      fromAmount = baseAmount
      toAmount = baseAmount * exchangeRate
    } else {
      toAmount = baseAmount
      fromAmount = baseAmount / exchangeRate
    }
 
    /*get api*/ 
    useEffect(() => {
      fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencies([data.base, ...Object.keys(data.rates)])
        setBaseCurrency(data.base)
        setExchangeRate(data['rates'])
    });

  }, []);

  /*get new currency*/ 
  useEffect(() => {
    if (baseCurrency != null && newCurrency != null) {
      fetch(`${API_URL}?base=${baseCurrency}&symbols=${newCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[newCurrency]))
    }
  }, [baseCurrency, newCurrency])

      /*initial currency*/ 
      function handleBaseCurrency(e) {
        setBaseAmount(e.target.value)
        setBaseCurrency(false)
      }

      /*converted currency*/ 
      function handleNewCurrency(e) {
        setBaseAmount(e.target.value)
        setNewCurrency(true)
      }

    return (
      <div className="App container mt-5">
        <h4>Currency Calculator</h4>
        <p>Convert the currency</p>
     
          <div  className="Numbers mt-5">
            <input className='currency-name'  defaultValue={baseAmount} onChangeAmount={handleBaseCurrency} type='number' ></input>
              <CurrencyInfo
                currency = {currencies}
                selected = {newCurrency}
                onChangeCurrency={e => setBaseCurrency(e.target.value)}
                onChangeAmount={handleBaseCurrency}
                amount={fromAmount}
                />
              <h6 className='convert'>convert to: </h6>
                
              <CurrencyInfo
                currency = {currencies}
                selected = {newCurrency}
                onChangeCurrency={e => setNewCurrency(e.target.value)}
                onChangeAmount={handleNewCurrency}
                amount={toAmount}
                />

                <button type="button" class="btn btn-primary" 
                onClick={() => setnewAmount}
                  onChangeAmount={handleNewCurrency}
                  amount={newAmount}
                  value={newCurrency}
                  >Convert</button>
          </div>
          <div className='result'>
            <p id='result-text' value={newCurrency}>{baseAmount} {baseCurrency} = {newCurrency} .</p>
          </div>
      </div>
    );
  };

export default App;

