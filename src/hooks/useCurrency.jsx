import React, { useState, useEffect, useContext, createContext, useMemo } from "react";
import { defaultState } from "helpers/const";
import { convertCurrency, getCurrencies } from "helpers/service";

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
    // Currently selected currencies
    const [curr1, setCurr1] = useState(defaultState.curr1);
    const [curr2, setCurr2] = useState(defaultState.curr2);
    // Current values according to current selected currencies
    const [value1, setValue1] = useState(defaultState.value1);
    const [value2, setValue2] = useState(defaultState.value2);

    // At hook initialization
    useEffect(() => {
        getCurrencies()
            .then(setCurrencies)
            .then(() => convertCurrency(defaultState.curr1, defaultState.curr2))
            .then(setValue2)
            .then(() => setLoading(false))
            .catch(err => console.error(err));
    }, []);

    // Watch currency change
    useEffect(() => {
        convert();
    }, [curr1, curr2]);

    // Changes current selected currency
    const switchCurrency = (name, curr) => {
        if (name === "curr1") {
            if (curr === curr2) {
                setCurr2(curr1);
                setCurr1(curr);
            }
            else
                setCurr1(curr);
        }
        else {
            if (curr === curr1) {
                setCurr1(curr2);
                setCurr2(curr);
            }
            else
                setCurr2(curr);
        }
    };

    // Updates input value
    const updateValue = (name, value) => {
        if (name === "value1")
            setValue1(value);
        else
            setValue2(value);
    };

    // Run conversion
    const convert = () => {
        if (!loading) {
            setLoading(true);
            convertCurrency(curr1, curr2)
                .then((result) => setValue2(result * value1))
                .then(() => setLoading(false))
                .catch(err => console.error(err));
        }
    };

    // Memoize data to prevent futile re-renders
    const memoizedValues = useMemo(() => ({
        loading,
        currencies,
        curr1, curr2,
        value1, value2,
        switchCurrency, updateValue, convert
    }), [loading, currencies, curr1, curr2, value1, value2]);

    return (
        <CurrencyContext.Provider
            value={memoizedValues}
        >
            {children}
        </CurrencyContext.Provider>
    );
};

const useCurrency = () => useContext(CurrencyContext);

export { useCurrency, CurrencyProvider };
