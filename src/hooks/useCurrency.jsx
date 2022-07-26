import React, { useState, useContext, createContext } from "react";
import { defaultState } from "helpers/const";

/*
    Currency hook and context
*/

// Setup context
const CurrencyContext = createContext(defaultState);

// Setup provider wrapper
const CurrencyProvider = ({ children }) => {
    // True when app is loading/fetching something
    const [loading, setLoading] = useState(defaultState.loading);
    // Holds all currencies list
    const [currencies, setCurrencies] = useState(defaultState.currencies);

    return (
        <CurrencyContext.Provider
            value={{
                loading,
                currencies
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};

const useCurrency = () => useContext(CurrencyContext);

export { useCurrency, CurrencyProvider };
