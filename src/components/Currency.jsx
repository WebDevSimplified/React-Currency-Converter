import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useCurrency } from "hooks/useCurrency";

/*
    Component that displays currencies list
*/

const Currency = ({ name }) => {
    let { loading, currencies, curr1, curr2, switchCurrency } = useCurrency();

    const mappedCurrencies = currencies.map((currency) => (
        <option value={currency} key={uuidv4()}>{currency}</option>
    ));

    // On currency change
    const handleChange = (e) => switchCurrency(name, e.target.value);

    return (
        <select className="currency" disabled={loading} value={name === "curr1" ? curr1 : curr2} onChange={handleChange}>
            {mappedCurrencies}
        </select>
    );
};

export default Currency;