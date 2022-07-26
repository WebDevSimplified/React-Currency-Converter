import React from "react";
import { v4 as uuidv4 } from "uuid";

/*
    Component that displays currencies list
*/

const Currency = ({ list }) => {
    const mappedCurrencies = list.map((currency) => (
        <option value={currency} key={uuidv4()}>{currency}</option>
    ));

    return (
        <select className="currency">
            {mappedCurrencies}
        </select>
    );
};

export default Currency;