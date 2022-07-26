import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useCurrency } from "hooks/useCurrency";

/*
    Component that displays currencies list
*/

const Currency = () => {
    let { loading, currencies } = useCurrency();

    const mappedCurrencies = currencies.map((currency) => (
        <option value={currency} key={uuidv4()}>{currency}</option>
    ));

    return (
        <select className="currency" disabled={loading}>
            {mappedCurrencies}
        </select>
    );
};

export default Currency;